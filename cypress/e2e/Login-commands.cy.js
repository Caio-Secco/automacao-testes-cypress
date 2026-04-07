describe('Login', () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it('Deve preencher os dados corretamente e logar com sucesso', () => {
        cy.login('teste@email.com', '123456')
        cy.url().should('include', '/my-account')
    })

    it('Deve exibir mensagem de erro ao informar senha inválida', () => {
        cy.login('teste@email.com', '123')
        cy.contains('Senha inválida.').should('be.visible')
    })

    it('Deve exibir mensagem de erro ao informar email inválido', () => {
        cy.login('teste', '123456')
        cy.contains('E-mail inválido.').should('be.visible')
    })

})

