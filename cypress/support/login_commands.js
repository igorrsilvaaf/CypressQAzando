Cypress.Commands.add('loginSucesso', () =>{
  const user_data = require('../fixtures/login.json')
  
  cy.visit('/login')
  cy.get('#user').type(user_data.email)
  cy.get('#password').type(user_data.password)
  cy.get('#btnLogin').click()
})