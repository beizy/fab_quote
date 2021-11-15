describe("Add to Favorite function and Favorite page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://api.quotable.io/random?maxLength=140", { fixture: "randomQuote1.json" }).as(
      "getRandomQuoteOnPageload"
    )

    cy.intercept("GET", "https://api.unsplash.com/photos/random?query=quote+background&orientation=landscape", {
      fixture: "randomBackground1.json",
    }).as("getRandomBgOnPageload")

    cy.visit("http://localhost:3000")
  })

  it("When User clicks 'Collect Quote Text'button, it should change to 'Added to Favorites", () => {
    cy.get(".button-holder").children().eq(3).click().contains("Added to Favorites")
  })

  it("When User clicks 'My Favorite Quotes' link, User should be directed to the favorite page", () => {
    cy.get(".fav-link").click().url().should("eq", "http://localhost:3000/favorites")
  })

  it("User should see the collected quote in favorite page", () => {
    cy.get(".button-holder").children().eq(3).click()
    cy.get(".fav-link").click()
    cy.get(".card-container").children().should("have.length", "1")
  })

  it("User should see a delete button in every quote in favorite page", () => {
    cy.get(".button-holder").children().eq(3).click()
    cy.get(".fav-link").click()
    cy.get(".card-container").first().find("button")
  })

  it("When User clicks Delete button, it should delete the quote from favorites", () => {
    cy.get(".button-holder").children().eq(3).click()
    cy.get(".fav-link").click()
    cy.get(".card-container").first().find("button").click()
    cy.get(".card-container").children().should("have.length", "0")
  })
})
