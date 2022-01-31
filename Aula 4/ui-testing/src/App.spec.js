describe('App Developers Skills', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Verificando os titulos',()=>{
        cy.get('h1').should('have.text','Developers App')
        cy.get('.App > :nth-child(2)').should('have.text','Skill Name')
        cy.get('.App > :nth-child(4)').should('have.text','Developers')
        cy.get('.App > :nth-child(6)').should('have.text','Technologies')
        cy.get('.App > :nth-child(8)').should('have.text','Roles')
    })

    it('verificando se os textos dos campos de textos',()=>{
        cy.get('.App > :nth-child(3)')
            .type('teste')
            .should('have.value','teste')
        cy.get('.App > :nth-child(5)')
            .type('teste')
            .should('have.value','teste')
        cy.get('.App > :nth-child(7)')
            .type('teste')
            .should('have.value','teste')
        cy.get('.App > :nth-child(9)')
            .type('teste')
            .should('have.value','teste')
    })

    it('clicando no botão Add skill',()=>{
        cy.get('#load-skills-button').click()
    })
});