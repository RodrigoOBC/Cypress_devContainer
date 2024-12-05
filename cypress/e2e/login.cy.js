const { HomePage } = require('../support/Pages/homePage')
const { LoginPage } = require('../support/Pages/loginPage')


const homePage = new HomePage()
const loginPage = new LoginPage()

describe('Login Feature', () => {

    beforeEach(() => {

        homePage.goToHomePage()
        homePage.clickOnSignInButton();

    });

    it('should login with credential wrong', () => {
        loginPage.fillEmailAndPassword(Cypress.env('MY_USE'),"teste159753")
        loginPage.clickOnSignInButton()
        loginPage.validateErrorMessage('Authentication failed.')
        console.log(Cypress.env('MY_USE'))
    })

    it('should login without password', () => {
        loginPage.fillEmailAndPassword(Cypress.env('MY_USE'),"")
        loginPage.clickOnSignInButton()
        loginPage.validateErrorMessage('Password is required.')
    })

    it('should login without email', () => {
        loginPage.fillEmailAndPassword("",Cypress.env('MY_PASS'))
        loginPage.clickOnSignInButton()
        loginPage.validateErrorMessage('An email address required.')
    })

})