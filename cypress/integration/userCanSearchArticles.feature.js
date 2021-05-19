describe('User can search for articles', () => {
  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        'http://newsapi.org/v2/everything?=biden&from=2020-07-12&sortBy=publishedAt',
        {
          fixture: 'biden.json',
        }
      );
      cy.visit('/');
    });
  });

  it('is expected to show search resaults ', () => {
    cy.visit('/');
    cy.get('[data-cy=news-search]').type('Biden');
    cy.get('[data-cy=search-submit]').click;
    cy.get('[data-cy=search-resault]').should('contain', 'articles')
  });


});
