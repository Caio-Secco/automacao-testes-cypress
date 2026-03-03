class RegisterPage {

    selectorsList() {
        const selectors = {
            registerButton: "[href='/register']",
            username: "[type='text']",
            mailField: "[type='email']",
            password: "[type='password']",
            submitButton: '#btnRegister',
            confirmButton: "[type='button']",
            confirmRegisterPage: ".account_form",
            genericConfirmation: "[style='display: block;']",
            confirmLocation: "#my-account_area",
            GenericErrorMessage: '.errorLabel',
            loginButton: "[href='/login']",
            loginMail: "[type='text']",
            loginPassword: "[type='password']",
            loginSubmitButton: "[type='submit']",
            UserButton: '#userLogged',
            logoutButton: "[href='/#!']",

        }

        return selectors
    }

    registerUser() {
        cy.get(this.selectorsList().registerButton).click()
        cy.get(this.selectorsList().confirmRegisterPage).should('be.visible')
    }

    fillRegisterForm(username, email, password) {
        cy.get(this.selectorsList().username).type(username)
        cy.get(this.selectorsList().mailField).eq(0).type(email)
        cy.get(this.selectorsList().password).type(password)

    }

    submitRegister() {
        cy.get(this.selectorsList().submitButton).click()
    }

    validateRegisterSuccess() {
        cy.get(this.selectorsList().genericConfirmation).should('be.visible')
        cy.get(this.selectorsList().confirmButton).eq(2).click()
        cy.get(this.selectorsList().confirmLocation).should('be.visible')
    }

        validateRequiredName() {
        cy.get(this.selectorsList().registerButton).click()
        //Campo Nome obrigatório
        cy.get(this.selectorsList().confirmRegisterPage).should('be.visible')
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().GenericErrorMessage).should('be.visible').contains('O campo nome deve ser prenchido')

    }

    validateRequiredEmail() {
        cy.get(this.selectorsList().registerButton).click()
        //Campo E-mail obrigatório
        cy.get(this.selectorsList().username).type('CaioTeste')
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().GenericErrorMessage).should('be.visible').contains('O campo e-mail deve ser prenchido corretamente')

    }

    validateRequiredPassword() {
        cy.get(this.selectorsList().registerButton).click()
        // O campo senha obrigatório
        cy.get(this.selectorsList().username).clear().type('CaioTeste')
        cy.get(this.selectorsList().mailField).eq(0).type('caio@teste.com')
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().GenericErrorMessage).should('be.visible').contains('O campo senha deve ter pelo menos 6 dígitos')
    }

}

export default RegisterPage