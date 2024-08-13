/// reference types="cypress" />

export default {
    realziaLogin() {
        const user_data = require('../../fixtures/login.json')

        cy.visit('/login')
            .get('#user').type(user_data.email)
            .get('#password').type(user_data.password)
            .get('#btnLogin').click()
            .get('.swal2-confirm.swal2-styled').click();
    },

    acessarOrders() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });

        cy.get('.nav > :nth-child(2) > a').click({waitForAnimations: false});
    },
}