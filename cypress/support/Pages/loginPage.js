const ObjectsPage = require('../../fixtures/ElementsLogin.json')

class LoginPage {

  getEmail() {
    return cy.get(ObjectsPage.email)
  }

  getPassword() {
    return cy.get(ObjectsPage.password)
  }

  getSignInButton() {
    return cy.get(ObjectsPage.singInButton)
  }


  fillEmail(email) {
    this.getEmail().type(email)
  }

  fillPassword(password) {
    this.getPassword().type(password)
  }

  clickOnSignInButton() {
    this.getSignInButton().click()
  }

  fillEmailAndPassword(email, password) {
    if (email === "" || email == null || email == undefined) {
      this.fillPassword(password)
    } else if (password === "" || password == null || password == undefined) {
      this.fillEmail(email)
    }else{
      this.fillEmail(email)
      this.fillPassword(password)
    }
  }

  validateErrorMessage(message) {
    cy.get(ObjectsPage.alertMessage).first().should('include.text', message)
  }
}

module.exports = { LoginPage: LoginPage }