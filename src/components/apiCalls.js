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

// const diyQuoteDownload = (bgUrl, qText, qAuthor, fontFamily, color, textTop, textLeft, authorTop, authorLeft) => {
//   return fetch(
//     `http://img.bruzu.com/?apiKey=BRUZU-T-v8xLDDd&backgroundImage=${bgUrl}&width=600&height=400&download=1&a.text=${qText}&a.textAlign=center&a.fontSize=32&a.fontFamily=${fontFamily}&a.color=${color}&a.originX=left&a.originY=top&a.top=${textTop}&a.left=${textLeft}&b.text=${qAuthor}&b.textAlign=center&b.fontSize=16&b.fontFamily=${fontFamily}&b.color=${color}&b.originX=left&b.originY=top&b.top=${authorTop}&b.left=${authorLeft}`
//   )
// }

const randomQuoteDownload = (bgUrl, qText, qAuthor, color, qAuthorTop) => {
  return fetch(
    `http://img.bruzu.com/?apiKey=BRUZU-T-v8xLDDd&backgroundImage=${bgUrl}&width=600&height=400&download=1&a.text=${qText}&a.textAlign=center&a.fontSize=32&a.color=${color}&b.text=${qAuthor}&b.textAlign=center&b.fontSize=16&b.color=${color}&b.top=${qAuthorTop}`
  )
}

export { getRandomQuote, getRandomBg, getBgByQuery, randomQuoteDownload }
