module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
    },
    plugins: ['@typescript-eslint', 'vue', 'prettier'],
    rules: {
        'class-methods-use-this': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'no-unused-vars': 'off',
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'no-alert': 'off',
        'prettier/prettier': 'warn',
        'no-unused-expressions': 'off'
    }
};
