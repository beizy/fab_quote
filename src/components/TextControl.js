import React, { useState, useContext, useEffect } from "react"
// import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import InputAdornment from "@mui/material/InputAdornment"

import { AppContext } from "../context"
import { getQuoteByTag, getRandomQuote } from "./apiCalls"

export default function TextControl() {
  const {
    randomQuote,
    diyAuthor,
    setDiyAuthor,
    diyText,
    setDiyText,
    quoteTag,
    setQuoteTag,
    diyQuotePosition,
    setDiyQuotePosition,
  } = useContext(AppContext)

  const quoteTags = [
    { value: "famous-quotes", label: "famous quotes" },
    { value: "friendship", label: "friendship" },
    { value: "inspirational", label: "inspirational" },
    { value: "life", label: "life" },
    { value: "love", label: "love" },
    { value: "technology", label: "technology" },
    { value: "wisdom", label: "wisdom" },
  ]

  // const fromTop = useRef(0)
  // const fromLeft = useRef(0)

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

  const handleTag = event => {
    setQuoteTag(event.target.value)
  }

  const handleBtn = () => {
    // console.log("handle btn fires")
    if (quoteTag !== "any category") {
      getQuoteByTag(quoteTag).then(data => {
        setDiyAuthor(data.author)
        setDiyText(data.content)
      })
    } else {
      getRandomQuote().then(data => {
        setDiyAuthor(data.author)
        setDiyText(data.content)
      })
    }
  }

  const handlePTop = event => {
    setDiyQuotePosition({ ...diyQuotePosition, top: event.target.value })
  }

  const handlePLeft = event => {
    console.log("handle left fires, value", event.target.value)
    setDiyQuotePosition({ ...diyQuotePosition, left: event.target.value })
  }

  return (
    <div className="text-control-holder">
      <TextField
        id="outlined-multiline-flexible"
        label="Quote Author"
        size="small"
        inputProps={{ maxLength: 20 }}
        value={diyAuthor}
        onChange={handleAuthor}
      />
      <TextField
        id="outlined-multiline-static"
        label="Quote Text"
        multiline
        rows={4}
        maxRows={5}
        size="small"
        value={diyText}
        inputProps={{ maxLength: 140 }}
        onChange={handleText}
      />
      <TextField
        id="outlined-select-currency"
        select
        size="small"
        label="Select Quote Category"
        value={quoteTag}
        onChange={handleTag}
      >
        {quoteTags.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        <MenuItem value="any category">any category</MenuItem>
      </TextField>
      <Button variant="outlined" onClick={handleBtn}>
        Get A New Quote on Chosen Category
      </Button>
      <TextField
        // inputRef={fromTop}
        label="Position from Top"
        id="outlined-start-adornment"
        // sx={{ m: 1, width: "25ch" }}
        size="small"
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>,
        }}
        onChange={handlePTop}
      />
      <TextField
        label="Position from Left"
        id="outlined-start-adornment"
        size="small"
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>,
        }}
        // inputProps={{ style: { fontSize: 12 } }}
        onChange={handlePLeft}
      />
    </div>
  )
}
