describe('Application main view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://newsapi.org/v2/everything?q=biden**>', 
    { fixture: 'biden.json'})
    cy.visit('/')
  });

  it('contains title', () => {
    cy.get("[data-cy=title]")
      .should('contain', 'News Search')
  });

});