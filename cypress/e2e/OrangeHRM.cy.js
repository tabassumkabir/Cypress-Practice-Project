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
        cy.get("input[placeholder='Type for hints...']").type('t')
        cy.wait(3000)
        //select the first one using keyboard downarrow
        cy.focused().type("{downarrow}{enter}")

        //find status
        cy.contains('Select').should('be.visible').click()

        //select status : enabled
        cy.focused().type('{downarrow}{enter}')


        //find and type username 

        const username = `user_${Math.floor(Math.random() * 100000)}`//this will create random username everytime 
        cy.contains('Username')
        .parents(".oxd-input-group")
        .find('input')
        .type(username)


        //find and type password 
        cy.contains('Password')
        .parents('.oxd-input-group')
        .find('input')
        .type('TestEmployee123@')

        //find and type confirm password 
        cy.contains('Confirm Password')
        .parents('.oxd-input-group')
        .find('input')
        .type('TestEmployee123@')

        //click on save 
        cy.get("[type='submit']").click()

        cy.wait(6000)

        //click on PM 
        cy.contains('PIM').click()
        cy.wait(3000)

        //type employee name 
        cy.xpath("(//input[@placeholder='Type for hints...'])[1]").type('alibaba')
        cy.wait(3000)
        cy.focused().type('{downarrow}{enter}')

        //click on search 
        cy.get("button[type='submit']").click()

        //click on edit on search result
        cy.xpath("(//button[@type='button'])[6]").click()
        cy.wait(4000)



    
       

        

        

        
        

        



    })
})