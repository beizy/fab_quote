import React, { useState, useEffect, useRef, useContext } from "react"
import "../styles/random.css"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { getRandomQuote, getRandomBg } from "./apiCalls"
import { AppContext } from "../context"

export default function Random() {
  const { randomQuote, setRandomQuote, addToFav, textColor, toggleTextColor, quoteTag, setQuoteTag } =
    useContext(AppContext)
  const [pending, setPending] = useState(true)

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

  const quoteTags = [
    { value: "famous-quotes", label: "famous quotes" },
    { value: "friendship", label: "friendship" },
    { value: "inspirational", label: "inspirational" },
    { value: "life", label: "life" },
    { value: "love", label: "love" },
    { value: "technology", label: "technology" },
    { value: "wisdom", label: "wisdom" },
  ]
  const handleTag = event => {
    setQuoteTag(event.target.value)
    shuffleQuote()
  }

  const shuffleQuote = () => {
    getRandomQuote(quoteTag).then(data =>
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

  return (
    !pending && (
      <section className="random-container">
        <div className="button-holder">
          <button onClick={shuffleQuote}>New Random Quote</button>
          <button onClick={shuffleBg}>New Random Image</button>
          <button onClick={toggleTextColor}>Change Text Theme </button>

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
        <div
          className="post"
          style={{
            backgroundImage: `url(${randomQuote.bgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="quote-container" style={{ color: `${textColor}` }}>
            <h1 className="quote-text">{randomQuote.quoteText}</h1>
            <h4 className="quote-author">{randomQuote.quoteAuthor}</h4>
          </div>
        </div>

        <TextField select size="small" label="Quote category" value={quoteTag} onChange={handleTag}>
          <MenuItem key="blank-category" value="" />
          {quoteTags.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </section>
    )
  )
}
