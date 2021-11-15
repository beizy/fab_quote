import React, { useState, useEffect, useContext } from "react"
import "../styles/random.css"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { getRandomQuote, getRandomBg, getBgByQuery } from "./apiCalls"
import { AppContext } from "../context"

export default function Random() {
  const { randomQuote, setRandomQuote, addToFav, textColor, toggleTextColor, quoteTag, setQuoteTag } =
    useContext(AppContext)
  // const [pending, setPending] = useState(true)
  const [errorMsg, setErrorMsg] = useState("Still loading")
  const [searchInput, setSearchInput] = useState("")
  const [bgUrls, setBgUrls] = useState([])

  useEffect(() => {
    Promise.all([getRandomQuote(), getRandomBg()])
      .then(resArray => {
        setRandomQuote({
          id: resArray[0]._id,
          quoteText: resArray[0].content,
          quoteAuthor: resArray[0].author,
          bgUrl: resArray[1].urls.regular,
          isFaved: false,
        })
        setErrorMsg("")
      })
      .catch(error => {
        setErrorMsg(error)
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

  const shuffleQuote = tag => {
    getRandomQuote(tag).then(data => {
      console.log(data)
      setRandomQuote({
        ...randomQuote,
        id: data._id,
        quoteText: data.content,
        quoteAuthor: data.author,
        isFaved: false,
      })
    })
  }

  const shuffleBg = () => {
    if (bgUrls.length === 0) {
      getRandomBg().then(data =>
        setRandomQuote({
          ...randomQuote,
          bgUrl: data.urls.regular,
        })
      )
    } else {
      let randomIndex = Math.floor(Math.random() * 25)
      setRandomQuote({
        ...randomQuote,
        bgUrl: bgUrls[randomIndex],
      })
    }
  }

  const handleTag = event => {
    setQuoteTag(event.target.value)
    shuffleQuote(event.target.value)
  }

  const handleSearch = event => {
    event.preventDefault()
    if (!searchInput) {
      getRandomBg().then(data =>
        setRandomQuote({
          ...randomQuote,
          bgUrl: data.urls.small,
        })
      )
      setBgUrls([])
    } else {
      let temp = searchInput.split(" ")
      let searchTerm = temp.length > 1 ? temp.join("+") : temp
      getBgByQuery(searchTerm).then(data => {
        let extracted = data.results.map(ele => ele.urls.regular)
        let randomIndex = Math.floor(Math.random() * 25)
        setRandomQuote({
          ...randomQuote,
          bgUrl: extracted[randomIndex],
        })
        setBgUrls(extracted)
      })
    }
  }

  return (
    //  errorMsg ? (
    //   <h1>{errorMsg}</h1>
    // ) : (
    <section className="random-container">
      <div className="button-holder">
        <button onClick={() => shuffleQuote(quoteTag)}>New Random Quote</button>
        <button onClick={shuffleBg}>New Random Image</button>
        <button onClick={toggleTextColor}>Change Text Theme </button>

        {randomQuote.isFaved ? (
          <button>Added to Favorites</button>
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

      {errorMsg ? (
        <h1 className="error-message">{errorMsg}</h1>
      ) : (
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
      )}
      <div className="query-container">
        <TextField
          id="category-select"
          select
          size="small"
          label="Quote category"
          value={quoteTag}
          onChange={handleTag}
        >
          <MenuItem key="blank-category" value="">
            Any category
          </MenuItem>
          {quoteTags.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <form onSubmit={handleSearch}>
          <TextField
            size="small"
            label="Search for background"
            type="search"
            value={searchInput}
            onChange={event => setSearchInput(event.target.value)}
          />
        </form>
      </div>
    </section>
  )
}
