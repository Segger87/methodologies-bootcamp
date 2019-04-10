module.exports = {
  extends: "eslint-config-airbnb",
  settings: {
    "import/core-modules": []
  },
  plugins: [
    "react",
    "jsx-a11y",
    "import",
    "react-hooks"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
}