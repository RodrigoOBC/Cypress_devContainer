const ObjectsPage = require('../../fixtures/ElementPage.json')

class HomePage {

    goToHomePage() {
        cy.visit(ObjectsPage.url)
    }

    fillSearchBar(product) {

    }

    clickSearchButton() {

    }

    searchProduct(product) {
        expect(true).to.be.true  // This is just to show that you can use the expect function
    }

    getBoxsResult() {

    }

    validateSearchProduct(productName) {
        
        expect(true).to.be.true  // This is just to show that you can use the expect function

    }

    clickProduct() {

    

    }
}

module.exports = { HomePage: HomePage }