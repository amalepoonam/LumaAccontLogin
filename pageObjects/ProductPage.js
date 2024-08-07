 export class ProductPage{
  getCheckOut(){
    return cy.contains('Checkout')
   
  }
  getFinalCheckOutproduct(){
    return cy.get('.btn.btn-success')
  }
  getCountryTextBox(){
    return cy.get('#country')
  }
  getCounterySuggestion(){
    return cy.get('.suggestions > ul > li > a')
  }
  getCheckBoxButton(){
     return cy.get('#checkbox2')
  }
  getPurchaseProduct(){
    return cy.contains('Purchase')
  }
  getSuccessmessage(){
   return cy.get('.alert')
  }

}
