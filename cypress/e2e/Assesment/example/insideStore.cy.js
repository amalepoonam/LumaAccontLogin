const { beforeEach } = require("mocha")

describe("Validate the functionality of inside store", () => {
    beforeEach(() => {
        cy.visit("http://training.inside.tm/shopping-basket/w4/i60/")
    })
    it("Verify the home page functionality of inside store page", () => {
        cy.get(".theLogo").should('be.visible');
        //cy.get('#searchstring169475736').should('be.visible')
        cy.get("input[name='searchstring']").should('exist')
        //searchstring169475736
        cy.get("input[name='searchstring']").should('have.attr', 'placeholder', 'Search the site . . .');
        //searh icon
        cy.get('[valign="middle"] > a').should('exist')
        // cy.get('#menu451000453').should('be.visible');
        // 
        cy.get('.pfCurrentItems:nth-child(1)').should('be.visible')
        cy.get(".pfCurrentItems:nth-child(1)").invoke("text").then((itemCount) => {
            expect(itemCount).eq("0");

        })
        // validate the text when cart is empty

        cy.get('h3').should('contain.text', 'Your Cart is Empty');

    })
    it("Login the user inside store", () => {

        cy.get('a').contains('sign in ').click();
        cy.get('input[name="login"]').type('test@yopmail.com')
        cy.get('input[name="password"]').type('test@123')
        cy.get('.loginButton').click();
        // verify the mail username after login
        // cy.get('td > strong').should('contain','hi tyuio!')
        // continue to shopping
        cy.get('a').contains('Continue Shopping').click();
        // cy.get('#menu-2-top').invoke('show')
        cy.get('#menu-3-top').trigger('mouseover').then(() => {
            //   cy.contains("a","denim").click({force:true});
            cy.get('#menu-3-1').click();


        });

        cy.get('a').contains('Catch Straight Leg Jean').click()
        cy.get('.prodPrice').should('be.visible') // Ensure the price is visible
            .and('contain', '$159.00')
        // add the quqntity
        cy.get("input[name='quantity']").clear().type('2');
        // Add to basket 
        cy.get('b > img').click();
        //continue shopping 
        //   cy.get('b').contains('CONTINUE SHOPPING').click();
        //  cy.get('#cartLinkContinueShopping').click()
        cy.get('#cartLinkCheckOut').click();
        // edit the details
        cy.get('#cartLinkChangeDetails').click();
        // change first name
        cy.get('input[name="_72_0"]').clear().type('Joe');
        // click to save and continue
        // cy.get('input').contains('save & continue').click()
        cy.get(':nth-child(8) > [width="60%"] > input').click()


        // cy.wait(2000)
        //Apply promo code 
        cy.get("input[name='promocode']").type('SAVe345')
        cy.get("img[src='http://training.inside.tm/www/1199/files/2014-button-apply-code.png']").click();
        cy.get('#PFPopUp_button').click()
        cy.get("input[name='creditCardName']").type('xyz')
        cy.get("select[name='creditCardtype']").select('Visa')
        cy.get("input[name='creditCard1']").type('41111111111111111')
        cy.get("input[name='exdate1']").type('12');
        cy.get("input[name='exdate2']").type('74')
        cy.get("input[name='cvvNum']").type('744')
        // cy.get(" input[name='shoppingbasketportletid']").click({force:true})
        cy.get('#cartLinkCheckOut > b > img').click();
        cy.get('#cartCellTop').then((element) => {
            const actualText = element.text();
            expect(actualText.includes("Thank you for shopping with us")).to.be.true

        })










    })
})



