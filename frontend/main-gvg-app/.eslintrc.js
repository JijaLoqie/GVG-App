module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/all", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-no-bind": "off",
    "react/no-array-index-key": "off",
    "no-undef": "off",
    "react/jsx-max-depth": 3,
  },
}
