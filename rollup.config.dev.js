/* eslint-disable import/no-extraneous-dependencies */
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('@rollup/plugin-node-resolve'); // Resolve file extensions
const strip = require('@rollup/plugin-strip'); // Remove debugging code (like console.log(), etc..)
const { terser } = require('rollup-plugin-terser'); // Uglify/minify
const license = require('rollup-plugin-license'); // Dumps license into compiled files
const json = require('@rollup/plugin-json'); // Lets us const json files as modules

const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');

/**
 * Root constants that make up the base of our config
 */

const ROOT_CONSTANTS = {
  input: 'src/stylished.jsx',
  output: {
    globals: {
      react: 'React',
    },
  },
  plugins: {
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    babel: {
      exclude: 'node_modules/**',
    },
    terser: {
      // output: {
      //   comments: 'all',
      // },
    },
    license: {
      banner: `Copyright <%= moment().format('YYYY') %> - Matt Oestreich - See LICENSE file in this repository to view all licensing info`,
    },
  },
  external: ['react'],
};

/**
 * Constants to be used in Rollup bundles
 */

const CONSTANTS = {
  ...ROOT_CONSTANTS,
  pluginsObj: [
    resolve(ROOT_CONSTANTS.plugins.resolve),
    json(),
    strip(),
    babel(ROOT_CONSTANTS.plugins.babel),
    terser(ROOT_CONSTANTS.plugins.terser),
    license(ROOT_CONSTANTS.plugins.license),
  ],
};

/**
 * Bundles built here
 */

const bundles = {
  esm: {
    input: CONSTANTS.input,
    output: {
      file: 'lib/stylished-components.esm.js',
    },
    plugins: CONSTANTS.pluginsObj,
    external: CONSTANTS.external,
  },
  umd: {
    input: CONSTANTS.input,
    output: {
      file: 'lib/stylished-components.umd.js',
      name: 'StylishedComponents',
      format: 'umd',
      globals: CONSTANTS.output.globals,
    },
    plugins: CONSTANTS.pluginsObj,
    external: CONSTANTS.external,
  },
  cjs: {
    input: CONSTANTS.input,
    output: {
      file: 'lib/stylished-components.cjs.js',
      format: 'cjs',
      globals: CONSTANTS.output.globals,
    },
    plugins: CONSTANTS.pluginsObj,
    external: CONSTANTS.external,
  },
};

/* eslint-disable no-else-return */
const askBundles = () => {
  const questions = [
    {
      type: 'checkbox',
      message: 'Select bundles',
      name: 'selectedBundles',
      choices: [
        new inquirer.Separator(' - select bundles - '),
        {
          name: 'esm',
          checked: true,
        },
        {
          name: 'cjs',
        },
        {
          name: 'umd',
        },
        new inquirer.Separator(' - exit without bundling - '),
        new inquirer.Separator(
          '  - (if this is selected, even if bundles are selected, nothing gets bundled) - ',
        ),
        {
          name: chalk.red('cancel'),
          value: 'cancel'
        },
      ],
      validate: answer => {
        if (answer.length < 1) {
          return 'You must choose at least one bundle.';
        }
        return true;
      },
    },
  ];
  return inquirer.prompt(questions);
};
/* eslint-enable no-else-return */

console.log(
  chalk.yellow(
    figlet.textSync(`Stylished\r\n    Components`, {
      font: 'Slant',
      horizontalLayout: 'universal smushing',
    }),
  ),
);

(async () => {
  const { selectedBundles } = await askBundles();
  const { log, trace, error } = console;
  const { red, green } = chalk;

  if (selectedBundles.includes('cancel')) {
    log(red.inverse.bold('\r\nExiting bundler...\r\n'));
  } else {
    const { BottomBar } = inquirer.ui;

    let i = 4;
    const loader = ['/ Bundling', '| Bundling', '\\ Bundling', '- Bundling'];
    const ui = new BottomBar({ bottomBar: loader[i % 4] });

    const interval = setInterval(() => {
      i += 1;
      ui.updateBottomBar(loader[i % 4]);
    }, 100);

    selectedBundles.forEach(async bundle => {
      try {
        const { input, plugins, external, output } = bundles[bundle];
        const rollupBundle = await rollup.rollup({ input, plugins, external });
        await rollupBundle.write({ output });
        log(green(`\t✅ Successfully bundled: '${green.bold(bundle)}'`));
      } catch (err) {
        trace(err);
        error(red(`\t❌ Failed to bundle: ${red.bold(bundle)}`));
      }
    });

    clearInterval(interval);
    log('\n');
    ui.close();
  }
})();
