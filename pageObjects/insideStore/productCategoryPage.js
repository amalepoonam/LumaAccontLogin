export class productCategoryPage{
    locator= require('../fixtures/insideStore.json')
    verifyLogoVisibility(){
       return cy.get(this.locator.logo).should('be.visible');
       
    }




}  