const checkResponse = res => {
  if (!res.ok) {
    throw "Things happen. We couldn't get data back."
  } else {
    return res.json()
  }
}

const getRandomBg = () => {
  return fetch("https://api.unsplash.com/photos/random?query=quote+background&orientation=landscape", {
    method: "GET",
    headers: { Authorization: "Client-ID fFcbD9xA7ZDP9InTsckH5Vr23ilFp2m2AzwpepKXNG4" },
  }).then(response => checkResponse(response))
}

const getRandomQuote = tag => {
  if (!tag) {
    return fetch("http://api.quotable.io/random?maxLength=140").then(response => checkResponse(response))
  } else {
    return fetch(`http://api.quotable.io/random?maxLength=140&tags=${tag}`).then(response => checkResponse(response))
  }
}

const getBgByQuery = searchTerm => {
  return fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&orientation=landscape&per_page=25`, {
    method: "GET",
    headers: { Authorization: "Client-ID fFcbD9xA7ZDP9InTsckH5Vr23ilFp2m2AzwpepKXNG4" },
  }).then(response => checkResponse(response))
}

// Below fetch does not work in local host.

// const randomQuoteDownload = (bgUrl, qText, qAuthor, color, qAuthorTop) => {
//   return fetch(
//     `http://img.bruzu.com/?apiKey=BRUZU-T-v8xLDDd&backgroundImage=${bgUrl}&width=600&height=400&download=1&a.text=${qText}&a.textAlign=center&a.fontSize=32&a.color=${color}&b.text=${qAuthor}&b.textAlign=center&b.fontSize=16&b.color=${color}&b.top=${qAuthorTop}`
//   )}

export { getRandomQuote, getRandomBg, getBgByQuery }
