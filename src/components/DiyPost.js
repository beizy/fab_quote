import React, { useContext, useEffect, useRef } from "react"
import { AppContext } from "../context"
import WebFont from "webfontloader"

export default function DiyPost() {
  const {
    randomQuote,
    diyQuote,
    diyQuotePosition,
    setDiyQuotePosition,
    diyQuoteFont,
    setDiyQuoteFont,
    diyQuoteSize,
    setDiyQuoteSize,
  } = useContext(AppContext)

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

  useEffect(() => {
    return () => {
      setDiyQuotePosition({ top: 0, left: 0 })
      setDiyQuoteFont({})
      setDiyQuoteSize({ width: "100%" })
    }
  }, [])

  useEffect(() => {
    setDiyQuoteSize({
      width: ref.current.getBoundingClientRect().width,
      height: ref.current.getBoundingClientRect().height,
    })
  }, [diyQuotePosition, diyQuote, diyQuoteFont])

  const ref = useRef(null)

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
          ref={ref}
          style={{
            ...diyQuotePosition,
            ...diyQuoteFont,
            width: diyQuoteSize.width,
          }}
        >
          <h1 className="diy-quote-text">{diyQuote.text}</h1>
          <h4 className="diy-quote-author">{diyQuote.author}</h4>
        </div>
      </div>
    </div>
  )
}
