module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
    },
    plugins: [
        '@typescript-eslint',
        'vue',
    ],
    rules: {
        'class-methods-use-this': 'off',
        'no-unused-vars': 'off',
        'no-console': 'off',
        indent: ['error', 4],
        'max-len': [
            'error',
            {
                code: 300,
            },
        ],
    },
};
