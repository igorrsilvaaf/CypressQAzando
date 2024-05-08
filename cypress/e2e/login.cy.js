/// <reference types="Cypress" />

describe('Login', () => {
  it('Validando mensagem de login, quando nao informa user e senha', () => {
    cy.login()
    cy.contains('.invalid_input', 'E-mail inválido.').should('be.visible')
    cy.get('#user').should('be.empty')
    cy.get('#password').should('be.empty')
  })

  it('Validando email incorreto', () => {
    cy.login()
    cy.contains('.invalid_input', 'E-mail inválido.').should('be.visible')
  })

  it('Login com sucesso', () => {
    cy.loginSucesso()
    cy.get('#swal2-title').should('be.visible')
    cy.get('#swal2-html-container').should('be.visible')
  });
})