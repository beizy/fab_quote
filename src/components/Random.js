import React, { useState, useEffect, useRef, useContext } from "react"
import "../styles/random.css"
// import TextField from "@mui/material/TextField"
// import MenuItem from "@mui/material/MenuItem"
import { getRandomQuote, getRandomBg } from "./apiCalls"
import { AppContext } from "../context"

export default function Random() {
  const { randomQuote, setRandomQuote, addToFav } = useContext(AppContext)
  const [pending, setPending] = useState(true)

  const [textColor, setTextColor] = useState("black")

  const qContainerRef = useRef(null)

  useEffect(() => {
    Promise.all([getRandomQuote(), getRandomBg()]).then(resArray => {
      setRandomQuote({
        id: resArray[0]._id,
        quoteText: resArray[0].content,
        quoteAuthor: resArray[0].author,
        bgUrl: resArray[1].urls.regular,
        isFaved: false,
      })
      setPending(false)
    })
  }, [])

  const shuffleQuote = () => {
    getRandomQuote().then(data =>
      setRandomQuote({
        ...randomQuote,
        id: data._id,
        quoteText: data.content,
        quoteAuthor: data.author,
        isFaved: false,
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
    !pending && (
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

          {randomQuote.isFaved ? (
            <button>❤️ Added to Favorites</button>
          ) : (
            <button
              onClick={e => {
                e.preventDefault()
                addToFav(randomQuote)
                setRandomQuote({
                  ...randomQuote,
                  isFaved: true,
                })
              }}
            >
              Collect Quote Text
            </button>
          )}
        </div>
      </section>
    )
  )
}
