import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import eslint from '@rollup/plugin-eslint';
import { terser } from 'rollup-plugin-terser';
var pkg = require('./package.json');

export default {
  input: './src/index.js',
  output: [
    { file: pkg.main, name: 'vue-format-input', format: 'umd' },
    { file: pkg.module, format: 'es' },
    { file: pkg.browser, format: 'cjs' },
  ],
  // {
  //   file: 'dist/vue-format-input.js',
  //   format: 'umd',
  //   name: 'vue-format-input',
  // },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    eslint({
      exclude: 'node_modules/**',
      fix: true,
      include: 'src',
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    terser(),
  ],
};
