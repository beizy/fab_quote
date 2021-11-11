import { createContext, useState } from "react"

const AppContext = createContext({})

const ContextProvider = props => {
  const [randomQuote, setRandomQuote] = useState({
    id: "",
    quoteAuthor: "test",
    quoteText: "test",
    bgUrl: "",
    pending: true,
    isFaved: false,
  })
  const [favQuotes, setFavQuotes] = useState([])

  const addToFav = quote => {
    console.log("addtofav in app fires")
    if (!favQuotes.some(ele => ele.id === quote.id)) {
      setFavQuotes([...favQuotes, quote])
      console.log("addtofav inside if fires")
    }
  }
  const deleteFromFav = quoteId => {
    let filtered = favQuotes.filter(ele => ele.id !== quoteId)
    setFavQuotes(filtered)
  }

  return (
    <AppContext.Provider value={{ randomQuote, setRandomQuote, favQuotes, setFavQuotes, addToFav, deleteFromFav }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
