const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 500,
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',
  env:{
    url:"https://rahulshettyacademy.com/angularpractice/"

  },
  projectId: "62eq2m",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    retries:{
      runMode:1
    },
    // specPattern:'cypress/e2e/Assesment/example/*.js'
  },
  
}); 
