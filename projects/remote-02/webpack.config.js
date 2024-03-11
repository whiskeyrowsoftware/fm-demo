const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remote-02',

  exposes: {
    './Home': './projects/remote-02/src/app/components/home/home.component.ts',
    './Component': './projects/remote-02/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
