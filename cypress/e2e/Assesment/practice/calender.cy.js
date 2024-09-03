
describe("Calender",()=>{
    beforeEach(function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise//#/offers')

    })
    it('verify date selector',function(){
        cy.get('.react-date-picker__inputGroup').click();
     
    })
})