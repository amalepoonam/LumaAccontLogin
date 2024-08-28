///<reference types="Cypress"/>
import { productCategoryPage } from "../../../../pageObjects/insideStore/productCategoryPage";
describe('Validate the Inside store application end to end functionality',()=>{
    beforeEach(()=>{
        cy.visit("http://training.inside.tm/shopping-basket/w4/i60/")
    })
    it('Validate home page functionality of the inside store page',()=>{
        // cy.get()
        const productPage=new productCategoryPage();
        productPage.verifyLogoVisibility();
        

    })
})