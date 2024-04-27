const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "calculatorApp",

  exposes: {
    // Update this whole line (both, left and right part):
    "./CalculatorAppModule":
      "./src/app/calculator-app/calculator-app.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
