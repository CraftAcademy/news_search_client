describe('User can search for news', () => {
  beforeEach(() => {
    cy.server();
    cy.route(
      'GET',
      'https://newsapi.org/v2/everything?q=**',
      'fixture:biden.json'
    );

    cy.visit('/');
    cy.get('[data-cy=news-search]').type('biden');
    cy.get('[data-cy=search-submit]').click();
  });

  it('is expected to show 10 articles', () => {
    cy.wait(1000);
    cy.get('[data-cy=article]').should('have.length', 10);
  });

  it.only('is expected to display article information', () => {
    cy.get('[data-cy=article]')
      .first()
      .within(() => {
        cy.get('[data-cy=image]').should(
          'have.attr',
          'src',
          'https://i1.wp.com/www.vanguardngr.com/wp-content/uploads/2020/08/Kamala-Harris-Biden.jpg?fit=1200%2C630&ssl=1'
        );
        cy.get('[data-cy=title]').should(
          'contain',
          'US: Harris under scrutiny for tough-on-crime prosecutor past'
        );
        cy.get('[data-cy=author]').should('contain', 'Rasheed Sobowale');
        cy.get('[data-cy=published]').should('contain', '2020-08-12');
        cy.get('[data-cy=url]').should(
          'have.attr',
          'href',
          'https://www.vanguardngr.com/2020/08/us-harris-under-scrutiny-for-tough-on-crime-prosecutor-past/'
        );
      });
  });
});
