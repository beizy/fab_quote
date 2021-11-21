import { createContext, useState, useEffect } from "react"

const AppContext = createContext({})

const ContextProvider = props => {
  const [randomQuote, setRandomQuote] = useState({
    id: "",
    quoteAuthor: "Wise Man",
    quoteText: "No quote yet! ",
    bgUrl: "",
    isFaved: false,
  })

  const [quoteTag, setQuoteTag] = useState("")

  const [favQuotes, setFavQuotes] = useState(() => {
    const saved = localStorage.getItem("myFavQuotes")
    return saved ? JSON.parse(saved) : []
  })

  const [diyQuote, setDiyQuote] = useState({})

  const [diyQuotePosition, setDiyQuotePosition] = useState({ top: 0, left: 0 })

  const [diyQuoteFont, setDiyQuoteFont] = useState({})

  const [diyQuoteSize, setDiyQuoteSize] = useState({ width: "100%", height: "auto" })

  const addToFav = quote => {
    if (!favQuotes.some(ele => ele.id === quote.id)) {
      setFavQuotes([...favQuotes, quote])
    }
  }
  const deleteFromFav = quoteId => {
    let filtered = favQuotes.filter(ele => ele.id !== quoteId)
    setFavQuotes(filtered)
  }

  useEffect(() => {
    localStorage.setItem("myFavQuotes", JSON.stringify(favQuotes))
  }, [favQuotes])

  return (
    <AppContext.Provider
      value={{
        randomQuote,
        setRandomQuote,
        favQuotes,
        setFavQuotes,
        addToFav,
        deleteFromFav,
        diyQuote,
        setDiyQuote,
        quoteTag,
        setQuoteTag,
        diyQuotePosition,
        setDiyQuotePosition,
        diyQuoteFont,
        setDiyQuoteFont,
        diyQuoteSize,
        setDiyQuoteSize,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
