import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import { terser } from 'rollup-plugin-terser';
import license from 'rollup-plugin-license';

const ROOT_CONSTANTS = {
  input: 'src/StylishedComponents.jsx',
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
      output: {
        comments: 'all',
      },
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

const CONSTANTS = {
  ...ROOT_CONSTANTS,
  pluginsObj: [
    resolve(ROOT_CONSTANTS.plugins.resolve),
    strip(),
    babel(ROOT_CONSTANTS.plugins.babel),
    terser(ROOT_CONSTANTS.plugins.terser),
    license(ROOT_CONSTANTS.plugins.license),
  ],
};

export default [
  // ES
  {
    input: CONSTANTS.input,
    output: {
      file: 'lib/esm/index.js',
    },
    plugins: CONSTANTS.pluginsObj,
    external: CONSTANTS.external,
  },

  // UMD
  {
    input: CONSTANTS.input,
    output: {
      file: 'lib/umd/index.js',
      name: 'ReactFlexboxSlim',
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
      file: 'lib/cjs/index.js',
      format: 'cjs',
      globals: CONSTANTS.output.globals,
    },
    plugins: CONSTANTS.pluginsObj,
    external: CONSTANTS.external,
  },
];
