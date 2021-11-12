import React, { useContext } from "react"
import { AppContext } from "../context"

export default function DiyPost() {
  const { randomQuote, diyQuote, diyQuotePosition, textColor } = useContext(AppContext)

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
        <div className="quote-container" style={{ ...diyQuotePosition, color: `${textColor}` }}>
          <h1 className="quote-text">{diyQuote.text}</h1>
          <h4 className="quote-author">{diyQuote.author}</h4>
        </div>
      </div>
    </div>
  )
}
