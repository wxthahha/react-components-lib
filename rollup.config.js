/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-11-17 15:17:57
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-11-17 18:24:13
 * @Description: rollup配置文件
 */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import jsx from "acorn-jsx";

module.exports = {
  input: "src/index.ts",
  acornInjectPlugins: [jsx()],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      modules: true,
    }),
    typescript({
      jsx: "preserve",
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
      extensions: [".ts", ".tsx"],
    }),
  ],
  output: [
    {
      file: "libs/cjs/index.js",
      format: "cjs",
      plugins: [
        getBabelOutputPlugin({
          presets: ["@babel/preset-env"],
        }),
      ],
    },
    {
      file: "libs/umd/index.umd.js",
      format: "umd",
      name: "BizBaseUI"
    },
    {
      dir: "libs/es",
      format: "es",
    }
  ],
};
