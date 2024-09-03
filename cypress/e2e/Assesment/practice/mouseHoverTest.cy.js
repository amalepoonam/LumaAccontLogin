describe('Perform mouse hover action',()=>{
    before(()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    it('Mouse hover test case',()=>{
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include','top')
    })
    it('click the hidden element without using mouser hover',()=>{
        cy.contains('Top').click({force:true});
        cy.url().should('include','top')
 
    })
})