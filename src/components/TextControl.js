import React, { useState, useContext, useEffect } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { AppContext } from "../context"

export default function TextControl() {
  const { randomQuote, diyAuthor, setDiyAuthor, diyText, setDiyText } = useContext(AppContext)
  // const [author, setAuthor] = useState(randomQuote.quoteAuthor)
  // const [text, setText] = useState(randomQuote.quoteText)

  useEffect(() => {
    setDiyAuthor(randomQuote.quoteAuthor)
    setDiyText(randomQuote.quoteText)
  }, [])

  const handleAuthor = event => {
    setDiyAuthor(event.target.value)
  }

  const handleText = event => {
    setDiyText(event.target.value)
  }

  return (
    <div className="text-control-holder">
      Text control area
      <TextField
        id="outlined-multiline-flexible"
        name="author"
        label="Author"
        value={diyAuthor}
        onChange={handleAuthor}
      />
      <TextField id="outlined-multiline-static" label="Text" multiline rows={4} value={diyText} onChange={handleText} />
    </div>
  )
}
