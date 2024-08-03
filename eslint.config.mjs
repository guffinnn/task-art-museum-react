import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

const tsconfig = JSON.parse(readFileSync(new URL('./tsconfig.json', import.meta.url), 'utf-8'));

const aliases = Object.entries(tsconfig.compilerOptions.paths).map(([key, value]) => [
    key.replace('/*', ''),
    path.resolve(__dirname, 'src', value[0].replace('/*', ''))
]);

export default [
    ...compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended"
    ),
    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
            "simple-import-sort": simpleImportSort,
            prettier,
        },
        languageOptions: {
            parser: tsParser,
        },
        settings: {
            react: {
                version: "detect",
            },
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                    project: path.resolve(__dirname, './tsconfig.json'),
                },
                alias: {
                    map: aliases,
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "prettier/prettier": "error",
            "react/react-in-jsx-scope": "off",
            "react/no-unescaped-entities": "off",
            "react/display-name": "off",
            "react/prop-types": "off",
        },
    }
];
