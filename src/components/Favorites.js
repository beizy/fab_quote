import React from "react"
import FavCard from "./FavCard"

export default function Favorites(props) {
  const favCards = props.favQuotes.map(ele => {
    return <FavCard key={ele.id} id={ele.id} quoteText={ele.quoteText} quoteAuthor={ele.quoteAuthor} />
  })

  return <div className="card-container">{favCards}</div>
}
