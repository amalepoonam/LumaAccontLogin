describe("Web table handling",()=>{
    beforeEach(()=>{
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it('Test case to handle webTable',()=>{
        cy.get("tr td:nth-child(2)").each(($e1,index,list)=>{
            const text=$e1.text();
            if(text.includes('Python')){
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                    const priceText=price.text();
                    expect(priceText).to.equal('25')

                })
            }
        })
    })
})