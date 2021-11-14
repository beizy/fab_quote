import React, { useContext, useEffect, useRef } from "react"
import { AppContext } from "../context"
import WebFont from "webfontloader"

export default function DiyPost() {
  const { randomQuote, diyQuote, diyQuotePosition, diyQuoteFont } = useContext(AppContext)

  const quoteContainerRef = useRef(null)

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Montserrat",
          "Raleway",
          "Chivo",
          "Oswald",
          "Julius Sans One",
          "Playfair Display",
          "Abril Fatface",
          "Arvo",
          "Old Standard TT",
          "Libre Baskerville",
          "Permanent Marker",
          "Pacifico",
          "Amatic SC",
          "Homemade Apple",
          "Nothing You Could Do",
        ],
      },
    })
  }, [])

  // useEffect(() => {
  //   console.log("height", quoteContainerRef.current.clientHeight)
  //   console.log("width", quoteContainerRef.current.clientWidth)
  //   setDivHeight(quoteContainerRef.current.clientHeight)
  // }, [])

  return (
    <div className="diy-post-holder">
      <div
        className="diy-post"
        style={{
          backgroundImage: `url(${randomQuote.bgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="diy-quote-container"
          style={{
            ...diyQuotePosition,
            ...diyQuoteFont,
          }}
          ref={quoteContainerRef}
        >
          <h1 className="diy-quote-text">{diyQuote.text}</h1>
          <h4 className="diy-quote-author">{diyQuote.author}</h4>
        </div>
      </div>
    </div>
  )
}
