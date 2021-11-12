import React, { useContext } from "react"
import { AppContext } from "../context"

export default function DiyPost() {
  const { randomQuote, diyAuthor, diyText } = useContext(AppContext)

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
          <h1 className="quote-text">{diyText}</h1>
          <h4 className="quote-author">{diyAuthor}</h4>
        </div>
      </div>
    </div>
  )
}
