/// <reference types="Cypress" />

import login_page from "../support/login_page/login_page";
import { setViewport } from "../support/config/viewportConfig"

const screens = ['desktop', 'iphone-xr', 'macbook-13']

screens.forEach(screen => {
  describe(`Login tests on ${screen}`, () => {

    beforeEach(() => {
      setViewport(screen);
    });

    it('Validando mensagem quando nao informa senha', () => {
      login_page.senhaVazia()
      cy.get('#user').should('be.visible')
      cy.get('#password').should('be.empty')
      cy.get('.invalid_input').should('be.visible').and('have.text', 'Senha inválida.')
    });

    it('Validando email incorreto', () => {
      login_page.EmailInvalido()
      cy.contains('.invalid_input', 'E-mail inválido.').should('be.visible')
    });

    it('Login com sucesso', () => {
      login_page.loginPage()
      cy.get('#swal2-title').should('be.visible')
      cy.get('#swal2-html-container').should('be.visible')
    });
  });
});