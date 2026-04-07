describe('Carrinho', () => {

    beforeEach(() => {
        cy.loginViaUI()
        cy.visit('/shop')
    })

    it('Deve adicionar produto ao carrinho com sucesso pela tela inicial', () => {
        cy.addProductToCart()
        cy.contains('Successfully added to your Cart').should('be.visible')
    })

    it('Deve remover o produto do carrinho com sucesso pelo atalho do carrinho', () => {
        cy.removeProductToCart()
    })

    it('Deve acessar a página de detalhes do produto e adiciona-lo com sucesso', () => {
        cy.addProductToCartForDetails()
        cy.contains('Successfully added to your Cart').should('be.visible')
    })

    it('Deve remover o primeiro item da página de detalhes do carrinho', () => {
        cy.removeProductToCartForDetails()
    })

    it('Deve remover todos os itens do carrinho de compras', () => {
        cy.clearProductToCart()
        cy.contains('YOUR CART IS EMPTY').should('be.visible')
    })


})

