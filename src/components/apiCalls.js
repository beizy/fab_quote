const getRandomBg = () => {
  return fetch("https://api.unsplash.com/photos/random?query=quote+background&orientation=landscape", {
    method: "GET",
    headers: { Authorization: "Client-ID fFcbD9xA7ZDP9InTsckH5Vr23ilFp2m2AzwpepKXNG4" },
  }).then(response => response.json())
  // .then(data => console.log("unsplash random", data))
}

const getRandomQuote = tag => {
  if (!tag) {
    return fetch("http://api.quotable.io/random?maxLength=140").then(response => response.json())
  } else {
    return fetch(`http://api.quotable.io/random?maxLength=140&tags=${tag}`).then(response => response.json())
  }
}

const getBgByQuery = searchTerm => {
  return fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&orientation=landscape&per_page=25`, {
    method: "GET",
    headers: { Authorization: "Client-ID fFcbD9xA7ZDP9InTsckH5Vr23ilFp2m2AzwpepKXNG4" },
  }).then(response => response.json())
}

export { getRandomQuote, getRandomBg, getBgByQuery }
