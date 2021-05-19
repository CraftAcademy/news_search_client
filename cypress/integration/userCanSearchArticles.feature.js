describe('User can search for articles', () => {
  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        'https://newsapi.org/v2/everything?q=tesla',
        {
          fixture: 'biden.json',
        }
      );
      cy.visit('/');
    });
  });

  it('is expected to show search resaults ', () => {
    cy.visit('/');
    cy.get('[data-cy=news-search]').type('Vanguard');
    cy.get('[data-cy=search-submit]').click;
    cy.get('[data-cy=search-resault]').should('contain', 'articles');
  });
});
