// get random quote
const getRandomQuote = () => {
  fetch("http://api.quotable.io/random?maxLength=140")
    .then(response => response.json())
    .then(data => console.log("random quote", data))
}

// get random background image
const getRandomBg = () => {
  fetch("https://api.pexels.com/v1/search?query=quote%20background", {
    method: "GET",
    headers: { Authorization: "563492ad6f91700001000001a41a497467c043a2928e1d943e10bb67" },
  })
    .then(response => response.json())
    .then(data => console.log("pexel query", data))
}

export { getRandomQuote, getRandomBg }
