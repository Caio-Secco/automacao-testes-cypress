describe('Cadastro', () => {

    beforeEach(() => {
        cy.visit('/register')
    })

    it('Deve preencher os dados corretamente e salvar dados com sucesso', () => {
        cy.cadastro('caio', 'caio@teste.com', '123456')
        cy.url().should('include', '/my-account')
    })

    it('Deve exibir mensagem de erro ao informar senha inválida', () => {
        cy.get('#user').type('caio')
        cy.get('#email').type('caio@teste.com')
        cy.get('#password').type('123')
        cy.get('#btnRegister').should('be.visible').and('not.be.disabled').click()
        cy.contains('O campo senha deve ter pelo menos 6 dígitos').should('be.visible')
    })

    it('Deve exibir mensagem de erro ao informar e-mail inválida', () => {
        cy.get('#user').type('caio')
        cy.get('#email').type('caio')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').should('be.visible').and('not.be.disabled').click()
        cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible')
    })

    it('Deve exibir mensagem de erro ao não informar nome no cadastro', () => {
        cy.get('#email').type('caio@teste.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').should('be.visible').and('not.be.disabled').click()
        cy.contains('O campo nome deve ser prenchido').should('be.visible')
    })





})

