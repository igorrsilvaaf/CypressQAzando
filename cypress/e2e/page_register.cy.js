/// reference types="cypress" />

import page_register from '../support/page_register/page_register'
import {setViewport} from "../support/config/viewportConfig";
import login_page from '../support/login_page/login_page'

const screens = ['desktop', 'iphone-xr', 'macbook-13']

screens.forEach(screen => {
  describe('Validando form', () => {
    beforeEach(() => {
      cy.visit("/login")
      setViewport(screen);
    })

    it('Acessando a pagina de cadastro', () => {
      page_register.form()
      cy.contains('h3', 'Cadastro de usuário').should('be.visible')
    })

    it('Validar o campo nome vazio', () => {
      page_register.nomeVazio()
      cy.get('#user').should('be.empty')
      cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido')
    })

    it('Validar o campo Email vazio', () => {
      page_register.emailVazio()
      cy.get('#user').should('not.have.value', '')
      cy.get('#password').should('not.have.value', '')
      cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible')
    })

    it('Validar o campo e-mail inválido', () => {
      page_register.emailInvalido()
      cy.get('#user').should('not.have.value', '')
      cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
      cy.get('#password').should('not.have.value', '')
    })

    it('Email valido', () => {
      page_register.emailValido()
      cy.get('#user').should('not.have.value', '')
      cy.get('#email').should('not.have.value', '')
      cy.get('#password').should('not.have.value', '')

    })

    it('Validar campo senha invalida', () => {
      page_register.senhaInvalida()
      cy.get('#user').should('not.have.value', '')
      cy.get('#email').should('not.have.value', '')
      cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Realizado cadastro com sucesso', () => {
      page_register.CadastroSucesso()
      cy.get('#swal2-title').should('be.visible').and('have.text', 'Cadastro realizado!')
    })
  })
});