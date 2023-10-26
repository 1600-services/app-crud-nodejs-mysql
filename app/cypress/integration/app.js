describe('test form', () => {
  it('check elements in the form', () => {
    cy.visit('http://localhost:3000'); 
    cy.contains('SAVE CUSTOMER').should('be.visible'); 
  });
});
