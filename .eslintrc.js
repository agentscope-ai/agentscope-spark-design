const path = require('path');

module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint', {
    paths: [path.join(__dirname, 'packages/spark-design')]
  }),
  rules: {
   "@typescript-eslint/no-use-before-define": "off",
   "no-useless-escape": "off",
   "no-param-reassign": "off",
   "@typescript-eslint/no-unused-vars": "off",
  }
};
