
//Comandos de login
Cypress.Commands.add('login', (email, password) => {
    cy.get('#user').type(email)
    cy.get('#password').type(password)
    cy.get('#btnLogin').should('be.visible').and('not.be.disabled').click()
})

//Login via UI
Cypress.Commands.add('loginViaUI', () => {
    cy.visit('/login')
    cy.get('#user').type('caio@test.com')
    cy.get('#password').type('password')
    cy.get('#btnLogin').should('be.visible').and('not.be.disabled').click()
})

//Comandos de cadastros

Cypress.Commands.add('cadastro', (nome, email, senha) => {
    cy.contains('Cadastro de usuário').should('be.visible')
    cy.get('#user').type(nome)
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('#btnRegister').should('be.visible').and('not.be.disabled').click()
})

//Comandos sobre carrinho de compras

Cypress.Commands.add('addProductToCart', () => {
    cy.get('.add-to-cart').first().should('exist').click({ force: true })
})

Cypress.Commands.add('removeProductToCart', () => {
    cy.get('.fa-shopping-bag').eq(1).click()
    cy.get('.fa-trash').first().should('be.visible').and('not.be.disabled').click()
})

Cypress.Commands.add('addProductToCartForDetails', () => {
    cy.get('.product_wrappers_one').first().click()
    cy.url().should('include', '/product-details-one')
    cy.get('.product_details_right_one').should('be.visible')
    cy.get('select').select('small')
    cy.get('.product-color-green').click()
    cy.get('.btn_sm').should('be.visible').and('not.be.disabled').click()
})

Cypress.Commands.add('removeProductToCartForDetails', () => {
    cy.visit('/cartTwo')
    cy.get('.text-danger').first().click()
})

Cypress.Commands.add('clearProductToCart', () => {
    cy.visit('/cartTwo')
    cy.get('button').contains('Clear cart').click()
})



