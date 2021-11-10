import "../styles/App.css"
import { useEffect } from "react"
import { getRandomQuote, getRandomBg } from "./apiCalls"

function App() {
  useEffect(() => {
    getRandomQuote()
    getRandomBg()
  }, [])

  return <div className="App">Hello</div>
}

export default App
