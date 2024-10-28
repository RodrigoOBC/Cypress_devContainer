const ObjectsPage = require('../../fixtures/AmazonPage.json')

class HomePage {

    goToHomePage() {
        cy.visit(ObjectsPage.url)
    }

    fillSearchBar(product) {

    }

    clickSearchButton() {

    }

    searchProduct(product) {

    }

    getBoxsResult() {

    }

    validateSearchProduct(productName) {
  

    }

    clickProduct() {

    

    }
}

module.exports = { HomePage: HomePage }