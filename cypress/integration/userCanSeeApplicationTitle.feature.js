describe('Application main view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://newsapi.org/v2/everything?q=biden&**', {
      fixture: 'biden.json',
    });
    cy.visit('/');
  });

  it('contains title', () => {
    cy.get('[data-cy=title]').should('contain', 'News Search');
  });

  it('contains search form', () => {
    cy.get('[data-cy=news-search]').type('biden');
    cy.get('[data-cy=search-submit]').click();
    cy.get('[data-cy=results-container]').within(() => {
      cy.get('[data-cy=article-0]').within(() => {
        cy.get('[data-cy=article-title]').should('contain', 'US: Harris under scrutiny for tough-on-crime prosecutor past')
      })
    })
  });
});
