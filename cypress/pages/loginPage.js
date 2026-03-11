class LoginPage {

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
            loginMail: "#user",
            loginPassword: "#password",
            loginSubmitButton: "#btnLogin",
            UserButton: '#userLogged',
            logoutButton: "[href='/#!']",

        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/')
    }

    loginUser(email, password) {
        cy.visit('/login')
        cy.get(this.selectorsList().loginMail).type(email)
        cy.get(this.selectorsList().loginPassword).type(password)
        cy.get(this.selectorsList().loginSubmitButton).click()
    }

    validateLogin() {
        cy.get(this.selectorsList().genericConfirmation).should('be.visible').contains('Login realizado')
        cy.get(this.selectorsList().confirmButton).click()
        cy.get(this.selectorsList().confirmLocation).should('be.visible')
    }

    logoutUser() {
        cy.get(this.selectorsList().UserButton).click()
        cy.get(this.selectorsList().logoutButton).click()
        cy.get(this.selectorsList().genericConfirmation).should('be.visible')//.contains('Logout realizado')
        cy.get(this.selectorsList().confirmButton).click()
    }


}

export default LoginPage