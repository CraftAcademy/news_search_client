describe('user can search for articles', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://newsapi.org/v2/everything?q=**',
      response: 'biden.json'
    })
    cy.get('[data-cy=input-field]').type('Biden')
    cy.get('[data-cy=search-button]').click()
  })

  it('is expected to display list of articles', () => {
    cy.get('[data-cy=article-container]').should('contain', 'articles')
  });

  it('is expected to dirplay title', () => {
    cy.get('[data-cy=article-container]').within(() => {
      cy.get('[data-cy=article-title]').first().should('contain', '"US: Harris under scrutiny for tough-on-crime prosecutor past"')
    })
  });
})
