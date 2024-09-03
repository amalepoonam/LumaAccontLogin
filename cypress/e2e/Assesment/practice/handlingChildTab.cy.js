describe('Chid tab handling', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    it('open the child window by removing target element', () => {
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.origin('https://www.qaclickacademy.com', () => {

            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get(".mt-50 h2").should('contain', 'Welcome to QAClick Academy')


        }
        )
    })
    it('open child tab withot removing target element',()=>{
        cy.get('#opentab').then((element)=>{
            const url=element.prop('href')
            cy.visit(url)
            cy.origin(url,()=>{
                cy.get("div.sub-menu-bar a[href*='about']").click();
            })
        })

    })
})