import React, { useContext } from "react"
import { AppContext } from "../context"

export default function FavCard(props) {
  const { deleteFromFav } = useContext(AppContext)

  return (
    <div className="fav-card">
      <div className="text-holder">
        <p>Quote: {props.quoteText}</p>
        <p>Author: {props.quoteAuthor}</p>
      </div>
      <div className="card-del-btn-holder">
        <button
          onClick={e => {
            e.preventDefault()
            deleteFromFav(props.id)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
