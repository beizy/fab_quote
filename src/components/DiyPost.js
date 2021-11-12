import React, { useContext } from "react"
import { AppContext } from "../context"

export default function DiyPost() {
  const { randomQuote } = useContext(AppContext)
  return (
    <div className="post-holder">
      <div
        className="post"
        style={{
          backgroundImage: `url(${randomQuote.bgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="quote-container">
          <h1 className="quote-text">{randomQuote.quoteText}</h1>
          <h4 className="quote-author">{randomQuote.quoteAuthor}</h4>
        </div>
      </div>
    </div>
  )
}
