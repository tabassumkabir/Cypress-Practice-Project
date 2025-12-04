describe('login', ()=>{

    const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'


    it ('OrangeHRM Login', ()=>{

        //go to login page
        cy.visit(URL)

        //username 
        cy.get("[name='username']").type("Admin")
        //password
        cy.get("[name='password']").type("admin123")
        //click on login 
        cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click()

        



    })
})