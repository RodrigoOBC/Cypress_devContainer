const { HomePage } = require('../support/Pages/homePage')

const homePage = new HomePage()

describe('Login Feature', () => {

    beforeEach(() => {

        homePage.goToHomePage()
        homePage.clickOnSignInButton();

    });

    it('Validate login page', () => {
        cy.title().should('eq', 'My Shop')
    })

    it('should login without sucessful', () => {
       
    })

    it('should login without password', () => {

    })

    it('should login without email', () => {

    })

})