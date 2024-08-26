describe("IRCTC train booking", () => {
    it("select source and destination and book specific train", function () {
        cy.visit("https://www.irctc.co.in/");
        // cy.get(".ng-tns-c58-10.ui-calendar").click();
        cy.get('.ui-autocomplete > .ng-tns-c57-8').type("Pune");
        cy.get('#p-highlighted-option').click();
        cy.get('.ui-autocomplete > .ng-tns-c57-9').type("mumbai")
        cy.get('#p-highlighted-option').click()
        cy.get('.ui-calendar > .ng-tns-c58-10').click();

        // cy.get('.ui-calendar > .ng-trigger').within(()=>{
        // cy.get("ui-state-default ui-state-disabled ng-tns-c58-10 ng-star-inserted").each(($el)=>{
        //     cy.get(':nth-child(4) > :nth-child(3) > .ui-state-default').click();
        // })
        cy.get(':nth-child(4) > :nth-child(3) > .ui-state-default').click()
        cy.get('#journeyClass > .ui-dropdown').click({force:true});
        cy.get(':nth-child(3) > .ui-dropdown-item > .ng-star-inserted').click();
        cy.get(':nth-child(2) > .css-label_c').click();
        cy.get('.col-md-3 > .search_btn').click();
        






    })
})


