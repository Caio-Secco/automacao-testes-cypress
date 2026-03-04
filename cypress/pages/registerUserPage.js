class RegisterPage {

    selectorsList() {
        const selectors = {
            username: "#user",
            mailField: "#email",
            password: "#password",
            submitButton: '#btnRegister',
            confirmButton: ".swal2-confirm",
            confirmRegisterPage: ".account_form",
            genericConfirmation: "#swal2-title",
            confirmLocation: "#my-account_area",
            GenericErrorMessage: '.errorLabel',
            //loginButton: "#btnLogin",
            loginMail: "#user",
            loginPassword: "#password",
            loginSubmitButton: "#btnLogin",
            UserButton: '#userLogged',
            logoutButton: "[href='/#!']",

        }

        return selectors
    }

    registerUser() {
        cy.visit('/register')
        cy.get(this.selectorsList().confirmRegisterPage).should('be.visible')
    }

    fillRegisterForm(username, email, password) {
        cy.get(this.selectorsList().username).type(username)
        cy.get(this.selectorsList().mailField).type(email)
        cy.get(this.selectorsList().password).type(password)

    }

    submitRegister() {
        cy.get(this.selectorsList().submitButton).click()
    }

    validateRegisterSuccess() {
        cy.get(this.selectorsList().genericConfirmation).should('be.visible').contains('Cadastro realizado!')
        cy.get(this.selectorsList().confirmButton).click()
        cy.get(this.selectorsList().confirmLocation).should('be.visible')
    }

        validateRequiredName() {
        cy.visit('/register')
        //Campo Nome obrigatório
        cy.get(this.selectorsList().confirmRegisterPage).should('be.visible')
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().GenericErrorMessage).should('be.visible').contains('O campo nome deve ser prenchido')

    }

    validateRequiredEmail() {
        cy.visit('/register')
        //Campo E-mail obrigatório
        cy.get(this.selectorsList().username).type('CaioTeste')
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().GenericErrorMessage).should('be.visible').contains('O campo e-mail deve ser prenchido corretamente')

    }

    validateRequiredPassword() {
        cy.visit('/register')
        // O campo senha obrigatório
        cy.get(this.selectorsList().username).clear().type('CaioTeste')
        cy.get(this.selectorsList().mailField).type('caio@teste.com')
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().GenericErrorMessage).should('be.visible').contains('O campo senha deve ter pelo menos 6 dígitos')
    }

}

export default RegisterPage