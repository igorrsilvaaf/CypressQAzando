import { faker } from '@faker-js/faker';

const nomeCompleto = faker.person.fullName()
const email = faker.internet.email()
const senha = faker.internet.password()

Cypress.Commands.add('home', () => {
  cy.visit('/')
    .get('.fa fa-user').should('be.visible')
})

Cypress.Commands.add('login', () => {
  cy.visit('/login')
    .get('#btnLogin').click()
})

Cypress.Commands.add('form', () => {
  cy.visit('/register')
  cy.get('i.fa.fa-lock').click()
})

Cypress.Commands.add('nomeVazio', () => {
  cy.visit('/register')
  cy.get('#btnRegister').click()
    .get('#email').type(email)
    .get('#password').type(senha)
})

Cypress.Commands.add('emailVazio', ()=>{
  cy.visit('/register')
  cy.get('#user').type(nomeCompleto)
  cy.get('#password').type(senha)
  cy.get('#btnRegister').click()
})

Cypress.Commands.add('emailInvalido', () =>{
  cy.visit('/register')
  cy.get('#user').type(nomeCompleto)
  cy.get('#email').type('igor.123.com')
  cy.get('#password').type(senha)
  cy.get('#btnRegister').click()
})

Cypress.Commands.add('emailValido', () =>{
    cy.visit('/register')
    cy.get('#user').type(nomeCompleto)
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
  })

Cypress.Commands.add('senhaInvalida', () =>{
  cy.visit('/register')
  cy.get('#user').type(nomeCompleto)
  cy.get('#email').type(email)
  cy.get('#password').type('1')
  cy.get('#btnRegister').click()
})

Cypress.Commands.add('CadastroSucesso', () =>{
    cy.get('.right_list_fix > :nth-child(2)').click()
    cy.get('#user').type(nomeCompleto)
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('#btnRegister').click()
})
