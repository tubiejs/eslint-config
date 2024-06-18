require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "@tubie/eslint-config-react",
    // base comes after react because it includes prettier, and it needs to be the last.
    "@tubie/eslint-config-base",
  ],

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
