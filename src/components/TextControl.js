import React, { useContext, useEffect } from "react"
// import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
// import InputAdornment from "@mui/material/InputAdornment"
import { AppContext } from "../context"
// import { getQuoteByTag, getRandomQuote } from "./apiCalls"

export default function TextControl() {
  const {
    randomQuote,
    diyQuote,
    setDiyQuote,
    // quoteTag,
    // setQuoteTag,
    diyQuotePosition,
    setDiyQuotePosition,
    // toggleTextColor,
    diyQuoteFont,
    setDiyQuoteFont,
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

  const fonts = [
    { value: "Montserrat", label: "Montserrat" },
    { value: "Raleway", label: "Raleway" },
    { value: "Chivo", label: "Chivo" },
    { value: "Oswald", label: "Oswald" },
    { value: "Julius Sans One", label: "Julius Sans One" },
    { value: "Playfair Display", label: "Playfair Display" },
    { value: "Abril Fatface", label: "Abril Fatface" },
    { value: "Arvo", label: "Arvo" },
    { value: "Old Standard TT", label: "Old Standard TT" },
    { value: "Libre Baskerville", label: "Libre Baskerville" },
    { value: "Permanent Marker", label: "Permanent Marker" },
    { value: "Pacifico", label: "Pacifico" },
    { value: "Amatic SC", label: "Amatic SC" },
    { value: "Homemade Apple", label: "Homemade Apple" },
    { value: "Nothing You Could Do", label: "Nothing You Could Do" },
  ]

  const colors = [
    { value: "#222222", label: "Dusk" },
    { value: "#43302E", label: "Old Burgundy" },
    { value: "#565051", label: "Vampire" },
    { value: "#494F55", label: "Abbey" },
    { value: "#7f4737", label: "Sienna" },
    { value: "#F4E4F8", label: "Lavendar" },
    { value: "#DBE2E9", label: "Chrome" },
    { value: "#E5E1E6", label: "Platinum" },
    { value: "#FFFFED", label: "Pale Yellow" },
  ]

  useEffect(() => {
    setDiyQuote({ author: randomQuote.quoteAuthor, text: randomQuote.quoteText })
  }, [])

  const handleText = event => {
    setDiyQuote({ ...diyQuote, [event.target.name]: event.target.value })
  }

  const handlePostion = event => {
    setDiyQuotePosition({ ...diyQuotePosition, [event.target.name]: parseInt(event.target.value) })
  }

  const handleFont = event => {
    setDiyQuoteFont({ ...diyQuoteFont, [event.target.name]: event.target.value })
  }

  return (
    <div className="text-control-holder">
      <TextField
        label="Quote Author"
        size="small"
        inputProps={{ maxLength: 20, name: "author" }}
        value={diyQuote.author}
        onChange={handleText}
      />
      <TextField
        label="Quote Text"
        multiline
        maxRows={5}
        size="small"
        value={diyQuote.text}
        inputProps={{ maxLength: 140, name: "text" }}
        onChange={handleText}
      />
      <TextField
        select
        size="small"
        label="Font"
        inputProps={{ name: "family" }}
        value={diyQuoteFont.family}
        onChange={handleFont}
      >
        {fonts.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/* <TextField
        label="Position from Top"
        id="outlined-start-adornment"
        // sx={{ m: 1, width: "25ch" }}
        size="small"
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>,
        }}
        inputProps={{ name: "top" }}
        onChange={handlePostion}
      />
      <TextField
        label="Position from Left"
        id="outlined-start-adornment"
        size="small"
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>,
        }}
        inputProps={{ name: "left" }}
        onChange={handlePostion}
      /> */}
      {/* <Button variant="outlined" onClick={toggleTextColor}>
        Change Quote Color
      </Button> */}
      <TextField
        select
        size="small"
        label="Color"
        inputProps={{ name: "color" }}
        value={diyQuoteFont.color}
        onChange={handleFont}
      >
        {colors.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}
