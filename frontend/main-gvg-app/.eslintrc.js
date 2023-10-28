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
    // "react/jsx-no-bind": "off",
    "react/no-array-index-key": "off",
    "no-undef": "off",
	"react/jsx-props-no-spreading": "off",
    "react/jsx-max-depth": 0,
	"react/jsx-no-bind": 0,
	"react/jsx-handler-names": 0,
	"react/jsx-no-literals": 0,
	"react/forbid-component-props": 0,
  },
}
