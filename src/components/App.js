import "../styles/app.css"
import { useEffect } from "react"

import { Route } from "react-router-dom"
import Random from "./Random.js"

function App() {
  useEffect(() => {
    // getRandomQuote()
    // getQueryBg()
    // getRandomBg()
  }, [])

  return (
    <main className="app">
      <div className="nav"> Fab Quote </div>
      <div className="body">
        <Route path="/" exact component={Random} />
      </div>
      <footer>github.com/beizy/fab_quote</footer>
    </main>
  )
}

export default App
