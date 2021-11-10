// get random quote
const getRandomQuote = () => {
  return fetch("http://api.quotable.io/random?maxLength=140").then(response => response.json())
  // .then(data => console.log("random quote", data))
}

// get random background image
// const getQueryBg = () => {
//   fetch("https://api.pexels.com/v1/search?query=quote%20background", {
//     method: "GET",
//     headers: { Authorization: "563492ad6f91700001000001a41a497467c043a2928e1d943e10bb67" },
//   })
//     .then(response => response.json())
//     .then(data => console.log("pexel query", data))
// }

const getRandomBg = () => {
  return fetch("https://api.unsplash.com/photos/random?query=quote+background&orientation=landscape", {
    method: "GET",
    headers: { Authorization: "Client-ID fFcbD9xA7ZDP9InTsckH5Vr23ilFp2m2AzwpepKXNG4" },
  }).then(response => response.json())
  // .then(data => console.log("unsplash random", data))
}

export { getRandomQuote, getRandomBg }
