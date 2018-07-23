module.exports = {
  "extends": [
    "standard",
    "plugin:react/recommended",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
    }
  },
  "plugins": [
      "standard",
      "react"
  ],
  "rules": {
    "space-before-function-paren": ["error", "never"],
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "keyword-spacing": ["error", {"before": true, "after": false, "overrides": {"else": {"after": true}, "from": {"after": true}, "import": {"after": true}, "case": {"after": true}}}],
    "space-unary-ops": [2, {"words": true, "nonwords": false, "overrides": {"typeof": false}}],
    "react/jsx-uses-vars": [2],
    "no-template-curly-in-string": "off",
    "standard/no-callback-literal": "off"
  },
  "settings": {
    "react": {
        "pragma": "React",
        "version": "16.4.1"
    }
}
};
