import React from "react"
import FavCard from "./FavCard"

export default function Favorites(props) {
  const favCards = props.favQuotes.map(ele => {
    return (
      <FavCard key={ele.id} id={ele.id} quoteText={ele.quoteText} quoteAuthor={ele.quoteAuthor} delete={props.delete} />
    )
  })

  return (
    <div className="card-container">
      {props.favQuotes.length ? favCards : "Favorite list is empty! Go collect some!"}
    </div>
  )
}
