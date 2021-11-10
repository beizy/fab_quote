import "../styles/App.css"
import { useEffect } from "react"
import { getRandomQuote, getQueryBg, getRandomBg } from "./apiCalls"

function App() {
  useEffect(() => {
    getRandomQuote()
    // getQueryBg()
    getRandomBg()
  }, [])

  return <div className="App">Hello</div>
}

export default App
