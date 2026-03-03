class LoginPage {

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

    accessLoginPage() {
        cy.visit('/')
    }

    loginUser(email, password) {
        cy.get(this.selectorsList().loginButton).eq(0).contains('Login').click()
        cy.get(this.selectorsList().loginMail).type(email)
        cy.get(this.selectorsList().loginPassword).type(password)
        cy.get(this.selectorsList().loginSubmitButton).eq(1).click()
    }

    validateLogin() {
        cy.get(this.selectorsList().genericConfirmation).should('be.visible')
        cy.get(this.selectorsList().confirmButton).eq(2).click()
        cy.get(this.selectorsList().confirmLocation).should('be.visible')
    }

    logoutUser() {
        cy.get(this.selectorsList().UserButton).click()
        cy.get(this.selectorsList().logoutButton).click()
        cy.get(this.selectorsList().genericConfirmation).should('be.visible')
        cy.get(this.selectorsList().confirmButton).eq(2).click()
    }


}

export default LoginPage