describe('User can log in to its account', () => {
   it('Goes to the homepage', () => {
      cy.visit('/');
   });

   it('Can click on a login button', () => {
      cy.get('[data-cy="login"]').should('be.visible');
      cy.get('[data-cy="login"]').click();
   });
});
