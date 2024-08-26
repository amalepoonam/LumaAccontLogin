

describe('Customized command',function(){
    it('Command for various product',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        // cy.get(':nth-child(2) > .nav-link').click();
        // cy.get('h4.card-title').each(($el,index,list)=>{
        //     if($el.text().includes('Blackberry')){
        //         cy.get('button.btn.btn-info').eq(index).click();
        //     }
            
        // })
        cy.selectProduct('Nokia Edge')
        cy.selectProduct('Blackberry')
        cy.selectProduct("iphone X")
    })
})
// if ($el.text().trim() === product) {
//     cy.wrap($el).closest(this.locator.productTileSection).within(() => {
//     cy.get(this.locator.prodName).focus();
//     cy.get(this.locator.prodName, {timeout : 10000}).click({ force: true });
// });