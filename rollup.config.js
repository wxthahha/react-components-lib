/*
 * @Author: wangxiaoting wangxiaoting@4paradigm.com
 * @Date: 2023-11-17 15:17:57
 * @LastEditors: wangxiaoting wangxiaoting@4paradigm.com
 * @LastEditTime: 2023-11-21 11:28:48
 * @Description: rollup配置文件
 */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import jsx from "acorn-jsx";
import eslint from "@rollup/plugin-eslint";

const overrides = {
  compilerOptions: {
    noUnusedParameters: true,
    noUnusedLocals: true,
    strictNullChecks: true,
    moduleResolution: "node",
    declaration: true, //抽离声明代码 *.d.js
    allowSyntheticDefaultImports: true,
  },
  useTsconfigDeclarationDir: true,
};

module.exports = {
  input: "src/index.ts",
  acornInjectPlugins: [jsx()],
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx", ".less"], //允许我们加载第三方模块
    }),
    commonjs(),
    postcss({
      extract: true,
      modules: true,
      extensions: [".less", ".css"],
      namedExports: true,
      minimize: true,
    }),
    typescript({
      jsx: "preserve",
      tsconfigOverride: overrides,
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }),
    eslint({
      exclude: ["node_modules"],
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
      name: "BizBaseUI",
    },
    {
      dir: "libs/es",
      format: "es",
    },
  ],
  external: ["react", "react-dom"],
};
