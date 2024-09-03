import 'cypress-iframe'
describe("Frame Handle",()=>{
    beforeEach(function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    })
    it('handling frame event',function(){
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.iframe().find("h1[class='pricing-title']").should('have.length','2')
    })
})