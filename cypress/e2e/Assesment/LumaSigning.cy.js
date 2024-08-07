describe('Create New Account and signing that account', () => {
   
      
    it('Verify behaviour of creating new account functionality by using existing user credential ', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Create an Account').click();
      cy.get('#firstname').type('Poonam')
      cy.get('#lastname').type('Amale')
          cy.get('#email_address').type('poonamamale06@gmail.com')
          cy.get('#password').type('Poonam@123')
          cy.get('#password-confirmation').type('Poonam@123')
          cy.get('.action.submit.primary').click();
          cy.get('.message-error > div').invoke('text').then((actResult)=>{
              expect(actResult).eq('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
          })
        
    })
    it('Verify behaviour of login  functionality by using existing user credential ', () => {
      cy.visit('https://magento.softwaretestingboard.com/')
      cy.contains('Sign In').click();
      cy.get('#email').type('poonamamale06@gmail.com')
      cy.get('#pass').type('Poonam@123')
     cy.get('.action.login.primary').click();
     
    
        })
      })
