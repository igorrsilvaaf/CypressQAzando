/// <reference types="Cypress" />

describe('Login', () => {
  it('Validando mensagem quando nao informa senha', () => {
    cy.senhaVazia()
    cy.get('#user').should('be.visible')
    cy.get('#password').should('be.empty')
    cy.get('.invalid_input').should('be.visible').and('have.text', 'Senha inválida.')
  })

  it('Validando email incorreto', () => {
    cy.EmailInvalido()
    cy.contains('.invalid_input', 'E-mail inválido.').should('be.visible')
  })

  it('Login com sucesso', () => {
    cy.loginPage()
    cy.get('#swal2-title').should('be.visible')
    cy.get('#swal2-html-container').should('be.visible')
  });
})