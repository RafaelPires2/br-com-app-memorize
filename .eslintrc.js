module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "prettier",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
      ],
      parserOptions: {
        ecmaVersion: 2020,
        project: "tsconfig.json",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [
        "@typescript-eslint",
        "prettier",
        "import",
        "deprecation",
        "react",
        "react-native",
      ],
      rules: {
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "import/no-unresolved": [
          "error",
          { ignore: [".png$", ".webp$", ".jpg$", "story-loader", ".svg$"] },
        ],
        radix: ["warn", "as-needed"],
        "react-native/no-inline-styles": "off",
        "react/jsx-boolean-value": ["warn", "never"],
        "deprecation/deprecation": "warn",
        "react/prop-types": "off",
        "react/display-name": "off",
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
            alwaysTryTypes: true,
          },
        },
        react: {
          version: "detect",
        },
      },
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint", "prettier"],
      extends: ["prettier", "plugin:prettier/recommended"],
    },
  ],
};
