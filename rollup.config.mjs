import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import scss from "rollup-plugin-scss";
import dts from "rollup-plugin-dts"

export default [{
  input: 'src/index.ts',
  output: [{
    file: 'dist/cjs/index.js',
    format: 'cjs',
    sourcemap: true,
  }, {
    file: 'dist/esm/index.js',
    format: 'esm',
    sourcemap: true,
  }],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    scss(),
  ]
}, {
  input: 'dist/esm/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  plugins: [dts()],
  external: [/\.scss$/],
}]
