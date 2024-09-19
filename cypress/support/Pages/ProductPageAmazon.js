const ObjectsPage = require('../../fixtures/ProductPage.json')
// TODO criar page object para a página de produto do Amazon
class ProductPageAmazon {
    
    getNameProduct() {
        return cy.get(ObjectsPage.ProductName)
    }

    // getPriceProduct() {
    //     return cy.get('#priceblock_ourprice')
    // }
    
    // getButtonAddCart() {
    //     return cy.get('#add-to-cart-button')
    // }



}