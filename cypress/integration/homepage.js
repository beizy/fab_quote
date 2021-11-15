describe("homepage", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://api.quotable.io/random?maxLength=140", { fixture: "randomQuote1.json" }).as(
      "getRandomQuoteOnPageload"
    )

    cy.intercept("GET", "https://api.unsplash.com/photos/random?query=quote+background&orientation=landscape", {
      fixture: "randomBackground1.json",
    }).as("getRandomBgOnPageload")

    cy.visit("http://localhost:3000")
  })

  it("Upon arrival, User should see a randomly generated picture", () => {
    cy.get(".post").expect(".post").to.have.ownProperty("backgroundImange")
  })

  // it("User should see a login link in the header section when the page loads", () => {
  //   cy.get("header >a").contains("Login")
  // })

  // it("User should see all movies displayed on page when it is loaded", () => {
  //   cy.get(".card-holder").children().should("have.length", 4)
  // })

  // it("As a user, I can click a movie, and see that movie’s details", () => {
  //   cy.get("article").contains("Mulan").click().url().should("include", "337401")
  // })
})
