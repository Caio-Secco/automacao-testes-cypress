import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerUserPage"
import userData from "../fixtures/userData.json"
import MenuPage from "../pages/MenuButton"
import Chance from 'chance'

const chance = new Chance()
const pageRegister = new RegisterPage()
const pageLogin = new LoginPage()
const PageMenu = new MenuPage()


describe('Testes - QAzando', () => {

  beforeEach(() => {
    pageLogin.accessLoginPage()

  })

  it('Deve acessar a página de cadastro, preencher os dados e cadastrar o usuário com sucesso', () => {

    pageRegister.registerUser()
    pageRegister.fillRegisterForm(chance.first(), chance.email(), chance.string({ length: 7 }))
    pageRegister.submitRegister()
    pageRegister.validateRegisterSuccess()

  })

  it('Deve realizar login com sucesso e em seguida fazer logout do sistema', () => {

    pageLogin.loginUser(userData.userSuccess.username, userData.userSuccess.password)
    pageLogin.validateLogin()
    pageLogin.logoutUser()

  })


  it('Deve validar nome obrigatório', () => {
    pageRegister.validateRequiredName()
  })

  it('Deve validar email obrigatório', () => {
    pageRegister.validateRequiredEmail()
  })
  
  it('Deve validar senha obrigatória', () => {
    pageRegister.validateRequiredPassword()
  })

})