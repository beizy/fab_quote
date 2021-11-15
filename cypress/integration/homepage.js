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
    cy.get(".post")
      .should("have.css", "background-image")
      .and(
        "eq",
        'url("https://images.unsplash.com/photo-1581985430116-d8fba25256b0?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzQ2MTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzY5Mzk5MTg\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080")'
      )
  })

  it("Upon arrival, User should see a randomly generated quote", () => {
    cy.get(".quote-text").contains("Either you run the day or the day runs you.")
  })

  it("User should also see the author of the quote", () => {
    cy.get(".quote-author").contains("Jim Rohn")
  })

  it("When User clicks 'New Random Quote' button, User should see a different quote", () => {
    cy.intercept("GET", "http://api.quotable.io/random?maxLength=140", { fixture: "randomQuote2.json" })
      .as("getNewRandomQuote")
      .get(".button-holder")
      .first()
      .click()

    cy.get(".quote-text").contains("Be yourself; everyone else is already taken.")
  })

  it("When User clicks 'New Random Image' button, User should see a different image", () => {
    cy.intercept("GET", "https://api.unsplash.com/photos/random?query=quote+background&orientation=landscape", {
      fixture: "randomBackground2.json",
    })
      .as("getNewRandomImage")
      .get(".button-holder")
      .first()
      .next()
      .click()

    cy.get(".post")
      .should("have.css", "background-image")
      .and(
        "eq",
        'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNzQ2MTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzY1NTk4OTE\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080")'
      )
  })

  it("Quote should be in default color black", () => {
    cy.get(".quote-author").should("have.css", "color").and("eq", "rgb(0, 0, 0)")
  })

  it("When User clicks 'Change Text Theme' button, quote text should be white", () => {
    cy.get(".button-holder").children().eq(2).click()

    cy.get(".quote-author").should("have.css", "color").and("eq", "rgb(255, 255, 255)")
  })

  it("User should see a 'Collect Quote Text' button", () => {
    cy.get(".button-holder").children().eq(3).should("be.visible")
  })
  it("When User clicks 'Collect Quote Text'button, it should change to 'Added to Favorites", () => {
    cy.get(".button-holder").children().eq(3).click().contains("Added to Favorites")
  })
})
