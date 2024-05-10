Cypress.Commands.add('loginPage', () =>{
  const user_data = require('../fixtures/login.json')
  
  cy.visit('/login')
  cy.get('#user').type(user_data.email)
  cy.get('#password').type(user_data.password)
  cy.get('#btnLogin').click()
})

Cypress.Commands.add('EmailInvalido', () =>{
  const user_data_error = require('../fixtures/login_error.json')
  
  cy.visit('/login')
  cy.get('#user').type(user_data_error.email)
  cy.get('#password').type(user_data_error.password)
  cy.get('#btnLogin').click()
})

Cypress.Commands.add('senhaVazia', () =>{
  const user_data = require('../fixtures/login.json')
  
  cy.visit('/login')
  cy.get('#user').type(user_data.email)
  //cy.get('#password').type(user_data_errorpassword)
  cy.get('#btnLogin').click()
})