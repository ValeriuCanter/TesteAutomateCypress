
describe('Teste site de cumpărături', () =>{

    //Test de login cu user sau parola gresita (verifica daca este mesaj de eroare)
    
    it ('Nu se loghează', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_use');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.app_logo').should('exist');
    
    })


    // Test de login cu userul standard (verifica daca esti logat apoi)

    it ('Se loghează', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    //cy.url().should('include', '/inventory.html') 
    cy.get('.app_logo').should('exist');

    })

    //Test de logout (trebuie sa fii logat inainte sa poti da logout - dupa ce te loghezi ai in
    //stanga sus un meniu care contine logout)

    it ('Test de logout', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.get('.login_logo').should('exist');

    })

    //Test prin care verifici daca se poate deschide si inchide meniul lateral

    it ('Test dacă se poate deschide și închide meniul lateral', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').should('exist');
    cy.get('#react-burger-cross-btn').click();
    cy.get('[data-test="title"]').should('exist');
   
    })

    //Test de adaugare al unui produs in cart (adaugi produsul in cart si verifici daca s-a
    //adaugat)

    it ('Test de adăugare al unui produs în cart ', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist');

    })

     // Test de stergere al unui produs din cart (verifica daca produsul a disparut sau cartul
     //este gol)

    it ('Test de ștergere al unui produs din cart ', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('exist');

    })

    //Test prin care verifici daca poti sa comanzi un produs (adauga un produs in cos si
    //apoi urmeaza toti pasii de checkout pana la plasarea comenzii)

    it ('Test prin care verifici dacă poți să comanzi un produs ', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Valeriu');
    cy.get('[data-test="lastName"]').type('Canter');
    cy.get('[data-test="postalCode"]').type('2071');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    //cy.url().should('include', '/incheckout-complete.html') 
    cy.get('[data-test="checkout-complete-container"]').should('exist');
 

    })

    //Test prin care sa verifici daca poti accesa pagina cu detaliile unui produs (pagina
    //care apare cand dai click pe un produs)

    it ('Test prin care verifici dacă poți accesa pagina cu detaliile unui produs ', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('[data-test="inventory-item-desc"]').should('exist');
    
    })

    //Testeza daca butonul “Back to products” de pe pagina unui produs te duce la
    //pagina principala

    it ('Testeză dacă butonul “Back to products” de pe pagina unui produs te duce la pagina principala', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
    cy.get('[data-test="back-to-products"]').click();
    cy.get('[data-test="title"]').should('exist');
    
    })


})
    

