const { HomePageAmazon } = require('../support/Pages/homePageAmazon')
const { HomePageAmazon } = require('../support/Pages/ProductPageAmazon')
const ObjectsPage = require('../fixtures/AmazonPage.json')

const HomePage = new HomePageAmazon()


describe('Product Feature', () => {

  beforeEach(() => {

    HomePage.goToHomePage()

  });

  describe('Search for a product', () => {

    for(let projectTarget of ObjectsPage.ProductsTarget){
      it.skip(`Search for the product  ${projectTarget} with sucessful`, () => {
        HomePage.validateSearchProduct(projectTarget)
      })
    }
 
  })

  describe('Product\'S page', () => {

    for(let projectTarget of ObjectsPage.ProductsTarget){
      it(`Validate ${projectTarget}'s page`, () => {
        HomePage.validateSearchProduct(projectTarget)
        HomePage.clickProduct()

      })
    }
 
  })

  describe('Validate Cart', () => {

    for(let projectTarget of ObjectsPage.ProductsTarget){
      it.skip(`Add ${projectTarget} to cart`, () => {
        HomePage.validateSearchProduct(projectTarget)
        HomePage.clickProduct()
      })
    }
 
  })
  

})

