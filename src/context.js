import { createContext, useState } from "react"

const AppContext = createContext({})

const ContextProvider = props => {
  const [randomQuote, setRandomQuote] = useState({
    id: "",
    quoteAuthor: "Wise Man",
    quoteText: "No quote yet! ",
    bgUrl: "",
    pending: true,
    isFaved: false,
  })
  const [quoteTag, setQuoteTag] = useState("")
  const [favQuotes, setFavQuotes] = useState([])
  const [textColor, setTextColor] = useState("black")
  // const [queryBgUrls, setQueryBgUrls] = useState([])

  const [diyQuote, setDiyQuote] = useState({ author: "", text: "" })

  const [diyQuotePosition, setDiyQuotePosition] = useState({ top: 250, left: 0 })
  const [diyQuoteFont, setDiyQuoteFont] = useState({ family: "sans-serif", size: 16 })

  const addToFav = quote => {
    if (!favQuotes.some(ele => ele.id === quote.id)) {
      setFavQuotes([...favQuotes, quote])
    }
  }
  const deleteFromFav = quoteId => {
    let filtered = favQuotes.filter(ele => ele.id !== quoteId)
    setFavQuotes(filtered)
  }

  const toggleTextColor = () => {
    textColor === "black" ? setTextColor("white") : setTextColor("black")
  }
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
        textColor,
        toggleTextColor,
        diyQuoteFont,
        setDiyQuoteFont,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
