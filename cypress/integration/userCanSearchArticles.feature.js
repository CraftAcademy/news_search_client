describe('User can search for articles', () => {
  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://newsapi.org/v2/everything?q=biden&**', {
        fixture: 'biden.json',
      });
      cy.visit('/');
    });

    it('is expected to show search resaults ', () => {
      cy.get('[data-cy=news-search]').type('biden');
      cy.get('[data-cy=search-submit]').click();
      cy.get('[data-cy=search-container]').within(() => {
        cy.get('[data-cy=article]').within(() => {
          cy.get('[data-cy=article-title]').should(
            'contain',
            "US: Harris under scrutiny for tough-on-crime prosecutor past"
          );
        });
      });
    });
  });
});
