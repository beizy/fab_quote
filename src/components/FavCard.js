import React from "react"

export default function FavCard(props) {
  return (
    <div className="fav-card">
      <div className="text-holder">
        <p>Quote: {props.quoteText}</p>
        <p>Author: {props.quoteAuthor}</p>
      </div>
      <div className="button-holder">
        <button onClick={() => props.delete(props.id)}>Delete</button>
        <button>DIY</button>
      </div>
    </div>
  )
}
