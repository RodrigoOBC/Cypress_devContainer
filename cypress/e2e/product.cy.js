const { HomePage } = require('../support/Pages/homePage')
const ObjectsPage = require('../fixtures/ElementPage.json')

const homePage = new HomePage()

describe('Product Feature', () => {

  beforeEach(() => {

    homePage.goToHomePage()

  });

  it('Validate the title of the page', () => {
    cy.title().should('eq', 'My Shop')
  })

  describe('Search for a product', () => {

    for(let projectTarget of ObjectsPage.ProductsTarget){
      it(`Search for the product  ${projectTarget} with sucessful`, () => {
        homePage.searchProduct(projectTarget)
        homePage.validateSearchProduct(projectTarget)
      })
    }

    
 
  })

 
  

})

