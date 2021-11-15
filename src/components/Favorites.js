import React, { useContext } from "react"
import { AppContext } from "../context"
import FavCard from "./FavCard"
import "../styles/favorites.css"

export default function Favorites() {
  const { favQuotes } = useContext(AppContext)

  const favCards = favQuotes.map(ele => (
    <FavCard key={ele.id} id={ele.id} quoteText={ele.quoteText} quoteAuthor={ele.quoteAuthor} />
  ))

  return (
    <div className="card-container">{favQuotes.length ? favCards : "Favorite list is empty! Go collect some!"}</div>
  )
}
