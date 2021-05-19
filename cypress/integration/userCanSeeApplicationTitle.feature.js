describe('Application main view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/everything?q=biden&from=2021-04-19&sortBy=publishedAt&**', {
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
        cy.get('[data-cy=article-title-0]').should('contain', 'Sanktionen: Biden-Regierung nach Bericht über Nord Stream 2 unter Druck')
        cy.get('[data-cy=article-description-0]').should('contain', 'US-Präsident Biden hat Nord Stream 2 „einen schlechten Deal für Europa“ genannt. Nun sieht er sich Vorwürfen ausgesetzt, er habe die Ostsee-Pipeline nie wirklich verhindern wollen.')
      })
    })
  });
});
