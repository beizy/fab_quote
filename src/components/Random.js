import React, { useState, useEffect, useRef } from "react"
import "../styles/random.css"
import { getRandomQuote, getRandomBg } from "./apiCalls"

export default function Random() {
  const [randomQuote, setRandomQuote] = useState({
    quoteAuthor: "test",
    quoteText: "test",
    bgUrl: "",
    pending: true,
  })

  const [textColor, setTextColor] = useState("black")

  const qContainerRef = useRef(null)

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

  const shuffleQuote = () => {
    getRandomQuote().then(data =>
      setRandomQuote({
        ...randomQuote,
        quoteText: data.content,
        quoteAuthor: data.author,
      })
    )
  }

  const shuffleBg = () => {
    getRandomBg().then(data =>
      setRandomQuote({
        ...randomQuote,
        bgUrl: data.urls.regular,
      })
    )
  }

  const toggleTextTheme = () => {
    qContainerRef.current.style.color === "black" ? setTextColor("white") : setTextColor("black")
  }

  return (
    !randomQuote.pending && (
      <section className="random-container">
        <div
          className="post"
          style={{
            backgroundImage: `url(${randomQuote.bgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="quote-container" ref={qContainerRef} style={{ color: `${textColor}` }}>
            <h1 className="quote-text">{randomQuote.quoteText}</h1>
            <h4 className="quote-author">{randomQuote.quoteAuthor}</h4>
          </div>
        </div>
        <div className="button-holder">
          <button onClick={shuffleQuote}>New Random Quote</button>
          <button onClick={shuffleBg}>New Random Image</button>
          <button onClick={toggleTextTheme}>Change Text Theme </button>
          <button>Save This Quote</button>
        </div>
      </section>
    )
  )
}