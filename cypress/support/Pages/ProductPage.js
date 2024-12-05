const ObjectsPage = require('../../fixtures/ElementProductPage.json')

class ProductPage {
    getProductName() {
        return cy.get(ObjectsPage.productName)
    }

    getProductPrice() {
        return cy.get(ObjectsPage.productPrice)
    }

    getProductDescription() {
        return cy.get(ObjectsPage.productDescription)
    }

    getProductSize() {
        return cy.contains('Size').parent();
    }

    getProductColor() {
        return cy.get(ObjectsPage.colorOption)
    }

    getProductQuantity() {
        return cy.get(ObjectsPage.countProduct)
    }

    getAddToCartButton() {
        return cy.contains('Add to cart')
    }

    selectProductSize(size) {
        switch (size) {
            case "L":
                cy.get(ObjectsPage.sizeOption).select('3');
                break;
            case "M":
                cy.get(ObjectsPage.sizeOption).select('2');
                break;
            case "S":
                cy.get(ObjectsPage.sizeOption).select('1');
                break;
        
            default:
                break;
        }
        
    }

    selectProductColor(color) {
        // Need click another color to after click in the color that you want
        cy.get(`[name="${color}"]`).dblclick(); 
        cy.get('#color_13').click(); 
        cy.get(`[name="${color}"]`).click(); 

    }

    setNumberOfProduct(numberOfProduct) {
        let quantityProductElement = this.getProductQuantity()
        quantityProductElement.should('be.visible')
        quantityProductElement.clear()
        quantityProductElement.type(numberOfProduct)
    }

    clickOnAddToCartButton() {
        this.getAddToCartButton().click()
    }

    validateProductDetails(product) {

        let productName = this.getProductName();
        productName.should('be.visible').and('have.text', product.name);
        let productPrice = this.getProductPrice();
        productPrice.should('be.visible').and('have.text', product.price);
    }

    configureItemsToCart(product) {
        this.selectProductColor(product.color);
        this.selectProductSize(product.size);
        this.setNumberOfProduct(product.quantity);
    }

    clickOnProceedToCheckoutButton() {
        cy.contains('Proceed to checkout').should('be.visible').click()
    }

    validateProductAddedToCartSucessMessage() {
        let successMessag = cy.contains(ObjectsPage.sucessMessage)
        successMessag.should('be.visible')
        successMessag.should('include.text', ObjectsPage.sucessMessage);
    }

}

module.exports = { ProductPage: ProductPage }