import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve'; // Resolve file extensions 
import strip from '@rollup/plugin-strip'; // Remove debugging code (like console.log(), etc..)
import { terser } from 'rollup-plugin-terser'; // Uglify/minify
import license from 'rollup-plugin-license'; // Dumps license into compiled files
import json from '@rollup/plugin-json'; // Lets us import json files as modules

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
      banner: {
        commentStyle: 'regular',
        content: {
          file: path.join(__dirname, 'LICENSE'),
        },
      },
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

const bundles = [
  // ES
  {
    input: CONSTANTS.input,
    output: {
      file: 'lib/stylished-components.esm.js',
    },
    plugins: CONSTANTS.pluginsObj,
    external: CONSTANTS.external,
  },

  // UMD
  {
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

  // CJS
  {
    input: CONSTANTS.input,
    output: {
      file: 'lib/stylished-components.cjs.js',
      format: 'cjs',
      globals: CONSTANTS.output.globals,
    },
    plugins: CONSTANTS.pluginsObj,
    external: CONSTANTS.external,
  },
];

export default bundles;
