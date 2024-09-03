
describe("Google Map",()=>{
    beforeEach(function() {
       

    })
    it('verify Location',function(){
         cy.visit('https://www.google.com/maps/')
         cy.get('#searchboxinput').type("Wankhede Stadium");
         cy.get('#cell0x0').click();
         cy.screenshot();
         cy.log("saved the screenshot succesfully")
         cy.get('.DUwDvf').then((ele)=>{
            const actText= ele.text();
            expect(actText.includes("Wankhede Stadium")).to.be.true;
            cy.title().should('contain','Wankhede Stadium');
         })
         //rating points
         const ratingPoints ='4.5';
         const numOfRating='37,928'

        
         cy.get("div[class='fontDisplayLarge']").should('contain',ratingPoints)
         cy.log(ratingPoints);
         cy.get('.HHrUdb').should('contain',numOfRating);
         cy.log(numOfRating);
    })
})