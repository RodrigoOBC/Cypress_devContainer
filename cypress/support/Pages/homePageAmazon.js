const ObjectsPage = require('../../fixtures/AmazonPage.json')

class HomePageAmazon {

    goToHomePage() {
        cy.visit(ObjectsPage.url)
    }
    
    fillSearchBar(product) {
        let searchBar = cy.get(ObjectsPage.SearchField)
        searchBar.type(product)
    }

    clickSearchButton() {
        let searchButton = cy.get(ObjectsPage.SearchButton)
        searchButton.click()
    }

    searchProduct(product) {
        this.fillSearchBar(product)
        this.clickSearchButton()
    }

    getBoxsResult() {
        let productFound = cy.get(ObjectsPage.boxResults).first()
        return productFound
    }

    async validateSearchProduct(productName) {
        this.searchProduct(productName)
        let boxResult = this.getBoxsResult()

        boxResult.get(ObjectsPage.TitleResult).first().should('contain.text', productName)

    }
}

module.exports = { HomePageAmazon: HomePageAmazon }