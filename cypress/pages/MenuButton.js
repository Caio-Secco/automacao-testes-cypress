class MenuPage {

    selectorsList() {
        const selectors = {
            genericButton: "[role='tablist']",

        }

        return selectors
    }

    dashbordButton() {
        cy.get(this.selectorsList().genericButton).contains('Dashboard').click()
        cy.location('pathname').should('eq', '/my-account')
    }

    ordersButton() {
        cy.get(this.selectorsList().genericButton).contains('Orders').click()
        cy.get('.title').should('be.visible').contains('Orders')
        cy.location('pathname').should('eq', '/my-account/customer-order')
    }

    downloadsButton() {
        cy.get(this.selectorsList().genericButton).contains('Downloads').click()
        cy.get('.title').should('be.visible').contains('Download Invoices')
        cy.location('pathname').should('eq', '/my-account/customer-download')
    }

    addressesButton() {
        cy.get(this.selectorsList().genericButton).contains('Addresses').click()
        cy.location('pathname').should('eq', '/my-account/customer-address')
    }

    accountDetailsButton() {
        cy.get(this.selectorsList().genericButton).contains('Account details').click()
        cy.location('pathname').should('eq', '/my-account/customer-account-details')
        cy.get('.title').should('be.visible').and('contain', 'Account details')
    }

    logoutButton() {
        cy.get(this.selectorsList().genericButton).contains('logout').click()
        cy.location('pathname').should('eq', '/login')
    }



}

export default MenuPage