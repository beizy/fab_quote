import React, { useContext } from "react"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import { AppContext } from "../context"

export default function TextControl() {
  const { diyQuote, setDiyQuote, diyQuoteFont, setDiyQuoteFont } = useContext(AppContext)

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

  const handleText = event => {
    setDiyQuote({ ...diyQuote, [event.target.name]: event.target.value })
  }

  const handleFont = event => {
    setDiyQuoteFont({ ...diyQuoteFont, [event.target.name]: event.target.value })
  }

  return (
    <div className="text-control-holder">
      <TextField
        error={diyQuote.author === ""}
        label="Quote Author"
        size="small"
        inputProps={{ maxLength: 20, name: "author" }}
        value={diyQuote.author}
        onChange={handleText}
        helperText={diyQuote.author === "" ? "Please enter quote author" : ""}
      />
      <TextField
        error={diyQuote.text === ""}
        label="Quote Text"
        multiline
        maxRows={5}
        size="small"
        value={diyQuote.text}
        inputProps={{ maxLength: 140, name: "text" }}
        onChange={handleText}
        helperText={diyQuote.text === "" ? "Please enter quote text" : ""}
      />
      <TextField
        select
        size="small"
        label="Font"
        inputProps={{ name: "fontFamily" }}
        value={diyQuoteFont.family}
        onChange={handleFont}
      >
        {fonts.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

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
