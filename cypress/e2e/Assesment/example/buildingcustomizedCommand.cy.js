

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
    })
})