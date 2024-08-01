const { HomePageAmazon } = require('../support/Pages/homePageAmazon')
const ObjectsPage = require('../fixtures/AmazonPage.json')

const HomePage = new HomePageAmazon()

describe('Product Feature', () => {

  beforeEach(() => {

    HomePage.goToHomePage()

  });

  it(`Search for the product  ${ObjectsPage.ProductTarget} with sucessful`, () => {
    HomePage.validateSearchProduct(ObjectsPage.ProductTarget)


  })

  

})

