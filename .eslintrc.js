/**
 * Eslint config file.
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:mocha/recommended",
    "plugin:security/recommended",
    "prettier",
  ],
  plugins: ["mocha", "security", "prettier"],
  overrides: [],
  globals: {
    config: "readonly", // Add globals as 'readonly' or 'writable' as applicable
    logger: "readonly",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  ignorePatterns: ["dist/*"],
  rules: {
    // Custom eslint rules
    "no-trailing-spaces": "error",
    "consistent-return": "error",
    "no-console": "error",

    // @typescript-eslint overrides
    "@typescript-eslint/restrict-template-expressions": "off",

    // Custom mocha rules
    "mocha/no-skipped-tests": "error",
    "mocha/no-exclusive-tests": "error",

    // Prettier rules
    "prettier/prettier": "error",
  },
};