/// reference types="cypress" />

describe('Validando form', () =>{
  beforeEach(() => {
    cy.visit('/login')
  });

  it('Acessando o form', () => {
    cy.form()
    cy.get('.account_form > h3').should('be.visible')
  })

  it('Validar o campo nome vazio', () => {
    cy.nomeVazio()
    cy.get('#user').should('be.empty')
    cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
  })

  it('Validar o campo Email vazio', () => {
    cy.emailVazio()
    cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible')

  })

  it('Validar o campo e-mail inválido', () => {
    cy.emailInvalido()
    cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
  })

  it('Validar campo senha invalida', () => {
    cy.senhaInvalida()
    cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Realizado cadastro com sucesso', () => {
    cy.CadastroSucesso()
      .get('.swal2-popup').should('be.visible')
      .get('#swal2-title').should('have.text', 'Cadastro realizado!')
  })
})