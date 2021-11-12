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
  const [favQuotes, setFavQuotes] = useState([])

  // const [diyAuthor, setDiyAuthor] = useState(randomQuote.quoteAuthor)
  // const [diyText, setDiyText] = useState(randomQuote.quoteText)
  const [diyQuote, setDiyQuote] = useState({ author: "", text: "" })

  const [quoteTag, setQuoteTag] = useState("")
  const [diyQuotePosition, setDiyQuotePosition] = useState({ top: 250, left: 0 })
  const [textTheme, setTextTheme] = useState("black")

  const addToFav = quote => {
    // console.log("addtofav in app fires")
    if (!favQuotes.some(ele => ele.id === quote.id)) {
      setFavQuotes([...favQuotes, quote])
      // console.log("addtofav inside if fires")
    }
  }
  const deleteFromFav = quoteId => {
    let filtered = favQuotes.filter(ele => ele.id !== quoteId)
    setFavQuotes(filtered)
  }

  const toggleTextTheme = ref => {
    ref.current.style.color === "black" ? setTextTheme("white") : setTextTheme("black")
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
        textTheme,
        toggleTextTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
