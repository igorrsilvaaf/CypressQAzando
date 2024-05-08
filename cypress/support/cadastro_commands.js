import { faker } from '@faker-js/faker';

Cypress.Commands.add('login', () => {
  cy.visit('/login')
    .get('#btnLogin').click()
})

Cypress.Commands.add('form', () => {
  cy.visit('/')
  cy.get('i.fa.fa-lock').click()
})

Cypress.Commands.add('nomeVazio', () => {
  cy.visit('/register')
  cy.get('#btnRegister').click()
})

Cypress.Commands.add('emailVazio', ()=>{
  cy.visit('/register')
  cy.get('#user').type('Igor da Silva')
  cy.get('#btnRegister').click()
})

Cypress.Commands.add('emailInvalido', () =>{
  cy.visit('/register')
  cy.get('#user').type('Igor da silva')
  cy.get('#email').type('igor.123.com')
  cy.get('#btnRegister').click()
})

Cypress.Commands.add('senhaInvalida', () =>{
  cy.visit('/register')
  cy.get('#user').type('Igor da silva')
  cy.get('#email').type('igorrsilvaa920@gmail.com')
  cy.get('#password').type('1')
  cy.get('#btnRegister').click()
})

Cypress.Commands.add('CadastroSucesso', () =>{
  const nomeCompleto = faker.person.fullName()
  const email = faker.internet.email()
  const senha = faker.internet.password()

  cy.visit('/')
    .get('.right_list_fix > :nth-child(2)').click()
    .get('#user').type(nomeCompleto)
    .get('#email').type(email)
    .get('#password').type(senha)
    .get('#btnRegister').click()
})
