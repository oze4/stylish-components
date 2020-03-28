import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import { terser } from 'rollup-plugin-terser';

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
        /*
        comments: function (node, comment) {
          var text = comment.value;
          var type = comment.type;
          if (type == 'comment2') {
            // multiline comment
            return /@keep|@license|@cc_on/i.test(text);
          }
        },
        */
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
  ]
}

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
