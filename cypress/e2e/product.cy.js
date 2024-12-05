const { HomePage } = require('../support/Pages/homePage')
const { ProductPage } = require('../support/Pages/ProductPage')
const ObjectsPage = require('../fixtures/ElementPage.json')

const homePage = new HomePage()
const productPage = new ProductPage()

describe('Product Feature', () => {

  beforeEach(() => {

    homePage.goToHomePage()

  });

  it('Validate the title of the page', () => {
    cy.title().should('eq', 'My Shop')
  })

  describe('Search for a product', () => {

    for (let projectTarget of ObjectsPage.ProductsTarget) {
      it(`Search for the product  ${projectTarget} with sucessful`, () => {
        homePage.searchProduct(projectTarget)
        homePage.validateSearchProduct(projectTarget)
      })
    }



  })

  it('should open the product page', () => {
    const productsTarget = {name:"Blouse", price:"$27"}
    homePage.searchProduct(productsTarget.name);
    homePage.clickOnProduct(productsTarget.name);
    productPage.validateProductDetails(productsTarget);

  })

  it.only('should add a product to the cart', () => {
    const productsTarget = {name:"Printed Summer Dress", price:"$29",size:"M",color:"Black",quantity:"2"}

    homePage.searchProduct(productsTarget.name);
    homePage.clickOnProduct(productsTarget.name);
    productPage.configureItemsToCart(productsTarget);
    productPage.clickOnAddToCartButton();
    productPage.validateProductAddedToCartSucessMessage();
    
  })



})

