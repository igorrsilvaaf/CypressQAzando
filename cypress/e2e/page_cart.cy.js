import {setViewport} from "../support/config/viewportConfig";
import page_cart from "../support/page_cart/page_cart";

const  screens = ['desktop', ''];

screens.forEach(screen => {
    describe(`Adiciona o item ao carrinho ${screen}`, () => {
        beforeEach(() => {
            setViewport(screen)
        })

        it('Realiza o login para acessar o shop', () => {
            page_cart.realziaLogin('desktop')
            cy.get('.logo').should('be.visible')
        })

        it.only('Acessa Shop', () => {
            page_cart.realziaLogin('desktop')
            page_cart.acessarOrders('desktop')
            cy.contains('th', 'Order').should('be.visible')
            cy.contains('th', 'Date').should('be.visible')
            cy.contains('th', 'Status').should('be.visible')
            cy.contains('th', 'Total').should('be.visible')
            cy.contains('th', 'Actions').should('be.visible')
        })
    })
})