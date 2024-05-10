/// reference types="cypress" />

describe('Validando form', () =>{
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Acessando a pagina de cadastro', () => {
    cy.form()
    cy.contains('h3', 'Cadastro de usuário').should('be.visible')
  })

  it('Validar o campo nome vazio', () => {
    cy.nomeVazio()
    cy.get('#user').should('be.empty')
    cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
  })

  it('Validar o campo Email vazio', () => {
    cy.emailVazio()
    cy.get('#user').should('not.have.value', '')
    cy.get('#password').should('not.have.value', '')
    cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible')
  })

  it('Validar o campo e-mail inválido', () => {
    cy.emailInvalido()
    cy.get('#user').should('not.have.value', '')
    cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    cy.get('#password').should('not.have.value', '') 
  })

  it('Email valido', () =>{
    cy.emailValido()
    cy.get('#user').should('not.have.value', '')
    cy.get('#email').should('not.have.value', '') 
    cy.get('#password').should('not.have.value', '') 

  })

  it('Validar campo senha invalida', () => {
    cy.senhaInvalida()
    cy.get('#user').should('not.have.value', '')
    cy.get('#email').should('not.have.value', '')
    cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Realizado cadastro com sucesso', () => {
    cy.CadastroSucesso()
    cy.get('#swal2-title').should('be.visible').and('have.text', 'Cadastro realizado!')
  })
})