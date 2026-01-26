adescribe('On Linkedin', () => {
 
    it ('I can login', () => {
    cy.visit('https://linkedin.com');

    cy.get('.nav__button-secondary').click();
    cy.get('#username').type('@email.com');
    cy.get('#password').type('parola');
    cy.get('.btn__primary--large').click();
    cy.wait(7000)

    cy.get('.profile-card-background-image').should('exist');

   // cy.get('#ember359').should('exist');
     })

})
