import React from "react"

export default function FavCard(props) {
  return (
    <div className="fav-card">
      <p>Quote: {props.quoteText}</p>
      <p>Author: {props.quoteAuthor}</p>
    </div>
  )
}
