const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5irfrt',
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  defoultCommandTimeout: 5000,
  requestTimeout: 5000,
  pageLoadTimeout: 6000,
  responseTimeout: 3000,
  "video": false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://automationpratice.com.br",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});