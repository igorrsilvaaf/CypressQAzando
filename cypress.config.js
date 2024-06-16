const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5irfrt',
  "video": false,
  e2e: {
    baseUrl: "https://automationpratice.com.br",
    defoultCommandTimeout: 5000,
    //viewportWidth: 335,
    //viewportHeight: 555,
    setupNodeEvents(on, config) {

    },
  },
});
