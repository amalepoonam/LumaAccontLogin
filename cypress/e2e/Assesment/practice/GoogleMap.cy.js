
describe("Google Map",()=>{
    beforeEach(function() {
       

    })
    it('verify Location',function(){
         cy.visit('https://www.google.com/maps/');
         cy.get('#searchboxinput').type("Wankhede Stadium");
         cy.get('#cell0x0').click();
         cy.get('.DUwDvf').then((ele)=>{
            const actText= ele.text();
            expect(actText.includes("Wankhede Stadium")).to.be.true;
            cy.screenshot(); // screenshot is stored in screen shot folder
            cy.log("saved the screenshot succesfully");
            cy.title().should('contain','Wankhede Stadium');
         })
         //rating points
        //  const ratingPoints ='4.5';
        //  const numOfRating='37,928';
        //  cy.get("div[class='fontDisplayLarge']").should('contain',ratingPoints)
        //  cy.log(ratingPoints);
        //  cy.get('.HHrUdb').should('contain',numOfRating);
        //  cy.log(numOfRating);
        cy.get("div[class='fontDisplayLarge']").then($rating => {
            const rating = $rating.text().trim();
            cy.log('Rating: ' + rating);
            cy.get('.HHrUdb').then($reviews => {
                const reviews = $reviews.text().trim();
                cy.log('Number of Reviews: ' + reviews);
                console.log('Rating: ' + rating);
                console.log('Number of Reviews: ' + reviews);
            })
        })
    })
})