import "../styles/app.css"
import { useEffect, useState } from "react"

import { Route, Link } from "react-router-dom"
import Random from "./Random.js"
import Favorites from "./Favorites"

function App() {
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

  useEffect(() => {
    // getRandomQuote()
    // getQueryBg()
    // getRandomBg()
  }, [])

  return (
    <main className="app">
      <div className="nav">
        <div className="logo">Fab Quote</div>
        <Link to="/favorites" className="fav-link">
          My Favorite Quotes
        </Link>
        <Link to="/diy" className="diy-link">
          DIY Quote Card{" "}
        </Link>
      </div>
      <div className="body">
        <Route path="/" exact render={() => <Random addToFav={addToFav} />} />
        <Route path="/favorites" exact render={() => <Favorites favQuotes={favQuotes} delete={deleteFromFav} />} />
      </div>
      <footer>github.com/beizy/fab_quote</footer>
    </main>
  )
}

export default App
