import "../styles/app.css"
import { useState } from "react"

import { Route, Link } from "react-router-dom"
import Random from "./Random.js"
import Favorites from "./Favorites"
import { ContextProvider } from "../context"

function App() {
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
      <ContextProvider>
        <div className="body">
          <Route path="/" exact render={() => <Random />} />
          <Route path="/favorites" exact render={() => <Favorites />} />
        </div>
      </ContextProvider>
      <footer>github.com/beizy/fab_quote</footer>
    </main>
  )
}

export default App
