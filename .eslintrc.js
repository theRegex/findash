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
      "react",
      "emotion"
  ],
  "rules": {
    "keyword-spacing": ["error", {"before": true, "after": false, "overrides": {"else": {"after": true}, "from": {"after": true}, "import": {"after": true}, "case": {"after": true}}}],
    "no-template-curly-in-string": "off",
    "object-curly-spacing": "off",
    "quotes": ["error", "double"],
    "react/jsx-uses-vars": [2],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-unary-ops": [2, {"words": true, "nonwords": false, "overrides": {"typeof": false}}],
    "standard/no-callback-literal": "off",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error"
  },
  "settings": {
    "react": {
        "pragma": "React",
        "version": "16.7.0"
    }
}
};
