module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:jest/recommended"
  ],
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "prettier"
  ],
  "globals": {
    "__DEV__": true,
    "isNaN": true
  },
  "rules": {
    "arrow-parens": 0,
    "global-require": 0,
    "import/prefer-default-export": 0,
    "no-console": 0,
    "no-mixed-operators": 0,
    "no-use-before-define": 0,
    "radix": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "semi": [
      2,
      "never"
    ],
    "jsx-a11y/label-has-for": "off",
    "camelcase": [
      1,
      {
        "properties": "always"
      }
    ],
    "react/forbid-prop-types": [
      0,
      {
        "forbid": "object"
      }
    ],
    "no-underscore-dangle": "off",
    "class-methods-use-this": "warn",
    // "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
}