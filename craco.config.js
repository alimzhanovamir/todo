const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      debug: true,
      options: {
        baseUrl: './',
        aliases: {
          '@features': './src/features',
          '@ui': './src/ui'
        }
      }
    }
  ]
};