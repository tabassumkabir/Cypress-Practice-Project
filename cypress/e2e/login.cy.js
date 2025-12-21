describe('login', ()=>{

    const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'


    it ('OrangeHRM Login', ()=>{

        //go to login page
        cy.visit(URL)

        cy.wait(5000)

        //username 
        cy.get("[name='username']").type("Admin")
        //password
        cy.get("[name='password']").type("admin123")
        //click on login 
        cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click()

        //wait 
        cy.wait(3000)

        //find and click Admin
        cy.contains("Admin").should('be.visible').click()
        cy.wait(3000)

        //click on 'Add' button
        cy.get('.oxd-icon.bi-plus.oxd-button-icon').click()

        //click on User role
        cy.contains('Select').should('be.visible').click()
        cy.wait(2000)

        //to select 'Admin' using keyboard downarrows
        cy.focused().type('{downarrow}{enter}') 
        
        //select ESS
        //cy.contains('ESS').click()
        cy.wait(2000)

        //type employee name 
        cy.get("input[placeholder='Type for hints...']").type('Test employee')

        //find status
        cy.contains('Select').should('be.visible').click()

        //select status : enabled
        cy.focused().type('{downarrow}{enter}')

       

        

        

        
        

        



    })
})