import React, { useState, useContext, useEffect } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { AppContext } from "../context"

export default function TextControl() {
  const { randomQuote } = useContext(AppContext)
  const [author, setAuthor] = useState(randomQuote.quoteAuthor)
  const [text, setText] = useState(randomQuote.quoteText)

  // useEffect (()=>{

  // })

  const handleAuthor = event => {
    setAuthor(event.target.value)
  }

  const handleText = event => {
    setText(event.target.value)
  }

  return (
    <div className="text-control-holder">
      Text control area
      <TextField
        id="outlined-multiline-flexible"
        name="author"
        label="Author"
        // multiline
        // maxRows={4}
        value={author}
        onChange={handleAuthor}
      />
      <TextField id="outlined-multiline-static" label="Text" multiline rows={4} value={text} onChange={handleText} />
    </div>
  )
}
