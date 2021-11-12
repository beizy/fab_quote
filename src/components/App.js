import "../styles/app.css"
import { useState } from "react"

import { Route, Link } from "react-router-dom"
import Random from "./Random"
import Favorites from "./Favorites"
import Diy from "./Diy"
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
          Make My Own
        </Link>
      </div>
      <ContextProvider>
        <div className="body">
          <Route path="/" exact component={Random} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/diy" exact component={Diy} />
        </div>
      </ContextProvider>
      <footer>github.com/beizy/fab_quote</footer>
    </main>
  )
}

export default App
