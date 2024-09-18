const { HomePageAmazon } = require('../support/Pages/homePageAmazon')
const ObjectsPage = require('../fixtures/AmazonPage.json')

const HomePage = new HomePageAmazon()

describe('Product Feature', () => {

  beforeEach(() => {

    HomePage.goToHomePage()

  });

  describe('Search for a product', () => {

    for(let projectTarget of ObjectsPage.ProductsTarget){
      it(`Search for the product  ${projectTarget} with sucessful`, () => {
        HomePage.validateSearchProduct(projectTarget)
      })
    }
 
  })

 
  

})

