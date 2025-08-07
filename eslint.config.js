import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,vue}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser },
    rules: {
      indent: ['error', 2],
      'vue/html-indent': ['error', 2],
      'no-multi-spaces': 'error',
      'no-console': 'error',
    } 
  },
  pluginVue.configs["flat/essential"],
]);
