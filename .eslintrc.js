module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier-vue/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false,
    },
  },
  plugins: ['vue'],
  rules: {
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 0,
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/max-attributes-per-line': 0,
    'max-len': 0,
    'no-plusplus': 0,
    'no-unused-vars': 1,
    'vue/html-self-closing': 0,
    'vue/script-setup-uses-vars': 0,
    'consistent-return': 0,
  },
};
