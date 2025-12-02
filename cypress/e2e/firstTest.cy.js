describe('firstTest',()=>{

    it('verify title',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.title().should('eq', 'OrangeHRM')


    })
})