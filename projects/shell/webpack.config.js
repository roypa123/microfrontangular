const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "mfe1": "http://localhost:4201/remoteEntry.js",
    "mfe2": "http://localhost:4202/remoteEntry.js",
  },

  shared: {
    //"projects/shell/src/app/shared/event-bus.service.ts": { singleton: true, eager: true },
    "projects/shell/src/app/shared/event-bus.service.ts": { singleton: true },
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
  },

});
