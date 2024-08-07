
describe('My second test suite',()=>{
 let data='';
    beforeEach(function(){
cy.fixture('example').then((file)=>{
    data=file;
})

})
    it('My first test case',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get("input[name='name']:nth-child(2)").type(data.name)
     cy.get('select').select(data.gender)
    //  cy.get(':nth-child(2) > .nav-link').click();
     data.productName.forEach(function(products){
        cy.selectProduct(products)
        
     })

    })
})
// beforeEach(function() {
//     // Assign data directly if not using fixtures
//     this.data = {
//         name: 'John',
//         gender: 'Male'
//     };
// });

it.skip('My first test case', function() {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get("input[name='name']:nth-child(2)").type(this.data.name);
    cy.get('#exampleFormControlSelect1').select(this.data.gender);
    // verify the john should present in another box
    cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
    // validate minlength property
    cy.get("input[name='name']:nth-child(2)").should('have.attr','minlength','2');
    cy.get('#inlineRadio3').should('be.disabled')
  
});
