
describe("Calender",()=>{
    beforeEach(function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise//#/offers')

    })
    it('verify date selector',function(){
        // const monthNumber="10";
        const date="10";
        const year="2024";
        const desireMonth="September";
        // const expectedList=[date,year,desireMonth];
         cy.get('.react-date-picker__inputGroup').click();
         cy.get('.react-calendar__navigation__label').click();
         cy.get('.react-calendar__navigation__label').click();
         cy.contains('button',year).click();
         cy.get(".react-calendar__year-view__months").contains(desireMonth).click();
         cy.contains('abbr',date).click(); 
         cy.get('.react-date-picker__inputGroup__input').each(($el,index)=>{
         cy.wrap($el).invoke('val').then((text)=>{
                console.log(text)
             })
        //     cy.wrap($el).invoke('val').should('eq', expectedList[index])

         })
     
    })
})
