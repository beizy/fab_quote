import React, { useState, useEffect } from "react"
import "../styles/random.css"
import { getRandomQuote, getRandomBg } from "./apiCalls"

export default function Random() {
  const [randomQuote, setRandomQuote] = useState({
    quoteAuthor: "test",
    quoteText: "test",
    bgUrl: "",
    pending: true,
  })

  useEffect(() => {
    Promise.all([getRandomQuote(), getRandomBg()]).then(resArray => {
      console.log(resArray)
      setRandomQuote({
        quoteText: resArray[0].content,
        quoteAuthor: resArray[0].author,
        bgUrl: resArray[1].urls.regular,
        pending: false,
      })
    })
  }, [])

  return (
    !randomQuote.pending && (
      <section className="random-container">
        <div className="post" style={{ backgroundImage: `url(${randomQuote.bgUrl})`, backgroundSize: "contain" }}>
          <h1 className="quote-text">{randomQuote.quoteText}</h1>
          <h4 className="quote-author">{randomQuote.quoteAuthor}</h4>
        </div>
        <div className="button-holder">
          <button>New Random Quote</button>
          <button>New Random Image</button>
          <button>Save This Quote</button>
        </div>
      </section>
    )
  )
}
