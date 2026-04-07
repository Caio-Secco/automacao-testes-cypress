
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

Cypress.Commands.add('addProductToCart', () => {
    cy.get('.add-to-cart').first().should('exist').click({ force: true })
})



