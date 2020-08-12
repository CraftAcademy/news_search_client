describe('User can search for articles', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://newsapi.org/v2/**',
      response: 'fixture:biden.json'
    })
    cy.visit('/')
  })
  it('by passing in a query', () => {
    cy.get('[data-cy=news-search]').type('Biden')
    cy.get('[data-cy=search-submit]').click()
    cy.get('[data-cy=articles-list]')
    .children()
    .first()
    .should('contain', 'US: Harris under scrutiny for tough-on-crime prosecutor past')
    .next()
    .should('contain', "Harris brings Baptist, interfaith roots to Democratic ticket")
  });
});