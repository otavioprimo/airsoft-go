module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': [
        {
          rootPathSuffix: 'src/*',
          rootPathPrefix: '~/',
        },
        {
          rootPathSuffix: 'src/modules/*',
          rootPathPrefix: '#/',
        },
        {
          rootPathSuffix: './src/modules/design-system/*',
          rootPathPrefix: '@/',
        },
      ],
    },
  },
};
