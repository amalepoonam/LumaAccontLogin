///<reference types="Cypress"/>
// import HomePage from "../pageObjects/HomePage.js"
import { HomePage } from "../../../../pageObjects/Homepage"
import { ProductPage } from "../../../../pageObjects/ProductPage";

describe('Page object frame work ',()=>{
    let data='';
    before(function(){
        cy.fixture('example').then(function(file){
            data=file;
        })
    })

    it('Validate the functonality of the page', function(){
        // cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.visit(Cypress.env('url'))
        const homePage= new HomePage()
        const productPage=new ProductPage()
        homePage.getEditBox().type(data.name)
        homePage.getTwoWayBindining().should('have.value',data.name)
        homePage.getGender().select(data.gender)
        homePage.getEntreprenure().should('be.disabled')
        homePage.getShopTab().click();
        data.productName.forEach(function(products){
            cy.selectProduct(products)
          
            
         })
      productPage.getCheckOut().click()
      productPage.getFinalCheckOutproduct().click();
      productPage.getCountryTextBox().type('India')
      cy.get('.suggestions > ul > li > a').click()
     
      productPage.getCheckBoxButton().click({force:true});
      productPage.getPurchaseProduct().click();
//       productPage.getSuccessmessage().invoke('text').then((actResult)=>{
//    expect(actResult).eq( 'Thank you! Your order will be delivered in next few weeks :-)')
//       })
// productPage.getSuccessmessage().should('have.text','Success!Thank you! Your order will be delivered in next few weeks :-)')
productPage.getSuccessmessage().then((element)=>{
    const actualText=element.text();
    expect(actualText.includes("Success")).to.be.true

})
    })
})