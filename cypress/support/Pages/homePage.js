const ObjectsPage = require('../../fixtures/ElementPage.json')

class HomePage {

    goToHomePage() {
        cy.visit(ObjectsPage.url)
    }

    getSearchInput() {
        return cy.get(ObjectsPage.SearchField)
    }

    getSearchButton() {
        return cy.get(ObjectsPage.SearchButton)
    }

    searchProduct(product) {
        this.getSearchInput().type(product)
        this.getSearchButton().click()
    }

    validateSearchProduct(product) {
        cy.get(ObjectsPage.targetProduct).filter(`:contains("${product}")`).should('have.length.greaterThan', 1);
    }

    clickOnProduct(product) {
        cy.get(ObjectsPage.targetProduct).filter(`:contains("${product}")`).eq(1).click()
    }

}

module.exports = { HomePage: HomePage }