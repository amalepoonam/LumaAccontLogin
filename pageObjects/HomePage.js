 export class HomePage{
    getEditBox(){
        return cy.get("input[name='name']:nth-child(2)")

    }
    getGender(){
        return cy.get('select')
    }
    getTwoWayBindining(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getEntreprenure(){
        return cy.get('#inlineRadio3')
    }
    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
  

}
