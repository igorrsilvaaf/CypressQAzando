/// reference types="cypress" />import {faker} from "@faker-js/faker";const nomeCompleto = faker.person.fullName()const user_email = faker.internet.email()const user_senha = faker.internet.password()const elements = {  buttons: {    login: '#btnLogin',    register: '#btnRegister'  },  fields: {    name: '#user',    email: '#email',    password: '#password'  }}const visitRegisterPage  = () => {    cy.visit('/register')    cy.get('i.fa.fa-lock').click()}export default {    form(){        visitRegisterPage()    },    nomeVazio(){        visitRegisterPage()        cy.get(elements.fields.email).type(user_email)            .get(elements.fields.password).type(user_senha)            .get(elements.buttons.register).click()    },    emailVazio(){        visitRegisterPage()        cy.get(elements.fields.name).type(nomeCompleto)            .get(elements.fields.password).type(user_senha)            .get(elements.buttons.register).click()    },    emailInvalido(){        visitRegisterPage()        cy.get(elements.fields.name).type(nomeCompleto)            .get(elements.fields.email).type('igor.123.com')            .get(elements.fields.password).type(user_senha)            .get(elements.buttons.register).click()    },    emailValido(){        visitRegisterPage()        cy.get(elements.fields.name).type(nomeCompleto)            .get(elements.fields.email).type(user_email)            .get(elements.fields.password).type(user_senha)    },    senhaInvalida(){        visitRegisterPage()        cy.get(elements.fields.name).type(nomeCompleto)            .get(elements.fields.email).type(user_email)            .get(elements.fields.password).type('1')            .get(elements.buttons.register).click()    },    CadastroSucesso(){        visitRegisterPage()        cy.get(elements.fields.name).type(nomeCompleto)            .get(elements.fields.email).type(user_email)            .get(elements.fields.password).type(user_senha)            .get(elements.buttons.register).click()    }}