describe('Basic Test', () => {
  // it('Visit Staging Slash Website', () => {
  //   cy.visit('https://staging8.slash.co/contact/');

  //   // Get an email input, fill it with fake email
  //   cy.get('[name="name-1"]').type('John Doe');
  //   cy.get('[name="name-1"]').should('have.value', 'John Doe');

  //   // Get an email input, fill it with fake email
  //   cy.get('[name="email-1"]').type('john@johndoe.com');
  //   cy.get('[name="email-1"]').should('have.value', 'john@johndoe.com');

  //   // Get an message input, fill it with fake message
  //   cy.get('[name="textarea-1"]').type('This is for testing purpose. Please ignore.');
  //   cy.get('[name="textarea-1"]').should('have.value', 'This is for testing purpose. Please ignore.');
  // });

  it('Contact Slash flow test', function() {
    cy.visit('https://staging8.slash.co');
    cy.wait(3000);
    
    cy.get('button[data-cky-tag="accept-button"]').click();
    cy.wait(1000);
    cy.get('header.elementor-sticky--active #hamburger-12').click();
    cy.wait(1000);
    cy.get('#elementor-popup-modal-18281 div.mobile-menu-item.elementor-widget-icon-list span.elementor-icon-list-text').click();
    cy.wait(1000);

    cy.get('#name-1 [name="name-1"]').click();
    cy.get('#name-1 [name="name-1"]').type('John Doe');
    cy.wait(1000);

    cy.get('#email-1 [name="email-1"]').click();
    cy.get('#email-1 [name="email-1"]').type('john@johndoe.com');
    cy.wait(1000);
    
    cy.get('#textarea-1 [name="textarea-1"]').click();
    cy.get('#textarea-1 [name="textarea-1"]').type('This is for testing purpose. Please ignore.');
    cy.wait(1000);

    cy.get('#checkbox-1 span.forminator-checkbox-box').click();
    cy.get('#checkbox-1 [name="checkbox-1[]"]').check();
    cy.get('#main').scrollIntoView();
    cy.wait(3000);
    
    cy.get('#name-1 [name="name-1"]').should('have.value', 'John Doe');
    cy.get('#email-1 [name="email-1"]').should('have.value', 'john@johndoe.com');
    cy.get('#textarea-1 [name="textarea-1"]').should('have.value', 'This is for testing purpose. Please ignore.');
  });
});
