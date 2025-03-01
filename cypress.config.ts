const {defineConfig} = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      return config
    },
    testIsolation: false,
    chromeWebSecurity: false,
  },
});
