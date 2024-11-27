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
        return cy.get(ObjectsPage.addCartButton)
    }

    selectProductSize(size) {
        cy.get('select').select(size);
    }

    selectProductColor(color){
        let colorOption = this.getProductColor();
        colorOption.contains(color).click();
   
    }

    setNumberOfProduct(numberOfProduct) {
       let quantityProductElement =  this.getProductQuantity()
        quantityProductElement.clear();
        quantityProductElement.type(numberOfProduct)
    }

    clickOnAddToCartButton() {
        this.getAddToCartButton().click()
    }

    validateProductDetails(product) {

    let productName = this.getProductName();
      let productPrice = this.getProductPrice();
      let productSize = this.getProductSize();
      let productColor = this.getProductColor();

        productName.should('have.text', product.name)
        productPrice.should('have.text', product.price)
        
        productSize.should('be.visible');
        productColor.should('be.visible');
    }

    validateProductAddedToCart() {
       let successMessag =  cy.get(this.ObjectsPage.sucessMessage)
       successMessag.should('be.visible')
       successMessag.and('have.text', this.ObjectsPage.sucessMessage);
    }

}

module.exports = { ProductPage: ProductPage }