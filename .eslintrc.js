module.exports = {
  extends: [
    // "plugin:json/recommended"
    // "eslint:recommended",
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
        // "no-const-assign": "error",
        // "no-redeclare": "error",
        // "arrow-parens": "error",
        "no-var": "error",
        // "prefer-const": "error",
        // "prefer-template": "error",
        // "template-curly-spacing": "error",
        // "arrow-body-style": ["error", "as-needed"],
        // "no-return-assign": "error",
        // "no-loss-of-precision": "error"
      },
    },
    {
      // turn some rules off for polyfills
      files: [
        "files/en-us/web/api/cssstylesheet/insertrule/index.md/3_3.js",
        "files/en-us/web/api/idbkeyrange/includes/index.md/2_2.js",
        "files/en-us/web/api/rtcpeerconnection/getstreambyid/index.md/2_2.js",
        "files/en-us/web/api/document/domcontentloaded_event/index.md/1_1.js",
        "files/en-us/web/api/element/getattributenames/index.md/2_2.js"
      ],
      rules: {
        "no-var": "off",
        "prefer-const": "off",
      },
    },
    // {
    //   files: [
    //     "files/en-us/web/javscript/**/*.md/*.js",
    //     // "files/en-us/web/javascript/**/*.md/*.js,!files/en-us/web/javascript/**/*.md/*.example-bad.js",
    //     // "!files/en-us/web/javascript/**/*.md/*.example-bad.js",
    //   ],
    //   // excludedFiles: "*.js.example-bad",
    //   rules: {
    //     "no-undef": "off",
    //     "no-unused-expressions": "off",
    //     "no-unused-vars": "off",
    //     "padded-blocks": "off",
    //   },
    // },
  ],
};
