import React, { useState, useEffect } from "react"
import "../styles/random.css"

export default function Random() {
  const [randomQuote, setRandomQuote] = useState("Test quote")
  const [bgUrl, setBgUrl] = useState(
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzQ2MTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzY1NTk4OTE&ixlib=rb-1.2.1&q=80&w=1080"
  )

  return (
    <section className="random-container">
      <div className="post" style={{ backgroundImage: `url(${bgUrl})`, backgroundSize: "contain" }}>
        <h1 className="quote-text">{randomQuote}</h1>
      </div>
      <div className="button-holder">
        <button>New Random Quote</button>
        <button>New Random Image</button>
        <button>Save This Quote</button>
      </div>
    </section>
  )
}
