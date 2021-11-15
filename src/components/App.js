import "../styles/app.css"
import { Route } from "react-router-dom"
import Random from "./Random"
import Favorites from "./Favorites"
import Diy from "./Diy"
import Nav from "./Nav"
import { ContextProvider } from "../context"

function App() {
  return (
    <main className="app">
      <Nav />
      <ContextProvider>
        <div className="not-nav">
          <Route path="/" exact component={Random} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/diy" exact component={Diy} />
        </div>
      </ContextProvider>
    </main>
  )
}

export default App
