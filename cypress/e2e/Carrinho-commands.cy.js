describe('Carrinho', () => {

    beforeEach(() => {
        cy.loginViaUI()
        cy.visit('/shop')
    })

    it('Deve adicionar produto ao carrinho com sucesso', () => {
        cy.addProductToCart()
        cy.contains('Successfully added to your Cart').should('be.visible')
    })


})

