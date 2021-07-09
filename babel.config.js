module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src',
            rootPathPrefix: '~/',
          },
          {
            rootPathSuffix: './src/modules',
            rootPathPrefix: '#/',
          },
          {
            rootPathSuffix: './src/modules/design-system/components',
            rootPathPrefix: '@/',
          },
          {
            rootPathSuffix: './jest',
            rootPathPrefix: 'test/',
          },
        ],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
