import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import importPlugin from "eslint-plugin-import";
import nPlugin from "eslint-plugin-n";
import promisePlugin from "eslint-plugin-promise";
import standard from "eslint-config-standard";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    name: "standard",
    rules: standard.rules,
    plugins: {
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin,
    },
  },
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      "brace-style": ["error", "stroustrup", { allowSingleLine: true }],
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "vue/multi-word-component-names": "off",
    },
  },
  // Disable conflicting ESLint formatting rules
  {
    name: "prettier-config",
    rules: prettierConfig.rules,
  },

  // Run Prettier as an ESLint rule (optional but nice in editors)
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
