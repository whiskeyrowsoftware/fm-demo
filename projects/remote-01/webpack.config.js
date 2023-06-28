const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remote-01',

  exposes: {
    './Google-Chart-Module': './projects/remote-01/src/app/modules/google-charts/charts.module.ts',
    './My-Stand-Alone-Component': './projects/remote-01/src/app/components/my-stand-alone/my-stand-alone.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
