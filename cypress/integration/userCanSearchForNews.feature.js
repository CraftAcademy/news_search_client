describe('user can search for news related to a query', () => {

  before(() => {
    cy.server()
    cy.route(
      'GET',
      'http://newsapi.org/v2/everything?q=biden&from=2020-07-12&sortBy=publishedAt&apiKey=**',
      'fx:biden.json'
    )

      cy.visit('/')
      cy.get('[data-cy=news-search]').type('biden')
      cy.get('[data-cy=search-submit]').click()
  });


  it('is expected to display n of articles', () => {
    cy.get('[data-cy=articles]').children().should('have.length', 20)
  });
});