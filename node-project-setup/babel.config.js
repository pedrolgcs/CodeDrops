module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@models': './src/models',
          '@controllers': './src/controllers',
          '@shared': './src/shared',
          '@infra': './src/infra',
          '@config': './src/config',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
