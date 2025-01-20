import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import spellcheck from "eslint-plugin-spellcheck";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "node_modules/*",
        "dist/*",
        "build/*",
        "coverage/*",
        "**/*.d.ts",
        "src/public/",
        "src/types/",
    ],
}, ...compat.extends("google", "prettier"), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        prettier,
        spellcheck,
    },

    languageOptions: {
        globals: {
            ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, "off"])),
            ...globals.node,
            ...globals.commonjs,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "commonjs",

        parserOptions: {
            pject: "./tsconfig.json",
        },
    },

    rules: {
        "valid-jsdoc": "off",
        "prettier/prettier": "warn",
        "spellcheck/spell-checker": ["warn"],
    },
}];