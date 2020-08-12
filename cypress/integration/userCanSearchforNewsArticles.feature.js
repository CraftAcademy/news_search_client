describe("User can search for news articles", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url:
        "http://newsapi.org/v2/everything?q=biden&from=2020-07-12&sortBy=publishedAt&apiKey=<API_KEY>",
      response: "fixture:biden.json",
    });

    cy.visit("/");
    cy.get("input").type("Biden");
    cy.get("#search").click();
  });

  it(" Displays total results of 31672", () => {
    cy.contains("31672").should("be.visible");
  });

  it("User can see first title", () => {
    cy.contains(
      "US: Harris under scrutiny for tough-on-crime prosecutor past"
    ).should("be.visible");
  });

  it("User can see last title", () => {
    cy.contains(
      "China increases military drills as tensions with US heat up - CNN"
    ).should("be.visible");
  });
});