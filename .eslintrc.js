module.exports = {
  extends: [
    // "plugin:json/recommended"
  ],
  plugins: ["markdown"],
  parserOptions: {
    ecmaVersion: "latest",
    // allows top-level await among other things
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {},
  overrides: [
    {
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      // the markdown plugin assigns "virtual filenames" to fenced code blocks inside markdown,
      // see: https://github.com/eslint/eslint-plugin-markdown#advanced-configuration
      files: ["files/en-us/web/api/**/*.md/*.js"],
      rules: {
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "padded-blocks": "off",
        // "arrow-parens": "error",
        // "no-var": "error",
        // "prefer-const": "error",
        // "prefer-template": "error",
        // "template-curly-spacing": "error",
        // "arrow-body-style": ["error", "as-needed"],
      },
    },
  ],
};
