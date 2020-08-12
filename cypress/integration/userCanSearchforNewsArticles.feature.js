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
    cy.get("#submit").click();
  });

  it("User can see first title", () => {
    cy.contains(
      "Kamala Harris on student-loan forgiveness, Medicare, universal basic income, credit scores — and a tax on trading stocks"
    ).should("be.visible");
  });

  it("User can see last title", () => {
    cy.contains(
      "Californians React Biden's Decision To Name Kamala Harris His Running Mate"
    ).should("be.visible");
  });
});