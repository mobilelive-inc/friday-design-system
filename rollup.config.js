// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import babel from 'rollup-plugin-babel';
// import json from 'rollup-plugin-json';
// import fileSize from 'rollup-plugin-filesize';
// import { terser } from 'rollup-plugin-terser';
// import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
// import pkg from './package.json';
// export default {
//   input: 'src/components/index.js',
//   external: ['react', 'react-dom', 'prop-types', 'stream'],
//   output: [
//     { file: pkg.main, format: 'cjs', exports: 'named' },
//     { file: pkg.module, format: 'es', exports: 'named' },
//   ],
//   plugins: [
//     babel({ exclude: 'node_modules/**', runtimeHelpers: true }),
//     commonjs({
//       include: 'node_modules/**',
//       namedExports: {
//         'node_modules/react/index.js': [
//           'cloneElement',
//           'createContext',
//           'Component',
//           'createElement',
//         ],
//         'node_modules/react-dom/index.js': ['render', 'hydrate'],
//         'node_modules/react-is/index.js': [
//           'isElement',
//           'isValidElementType',
//           'ForwardRef',
//         ],
//       },
//     }),
//     json(),
//     fileSize(),
//     resolve(),
//     terser(),
//     sizeSnapshot(),
//   ],
// };