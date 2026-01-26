describe('Site emag.ro', () =>{

    it ('Funcționează cu o căutare de bază', ()=>{
        cy.visit('https://emag.ro');
        cy.get('#searchboxTrigger').type('lg').type('{enter}');
        cy.get('.gc-title').should('exist');
    })
})