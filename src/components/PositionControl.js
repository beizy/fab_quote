import React, { useContext } from "react"
import { AppContext } from "../context"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import Button from "@mui/material/Button"

export default function PositionControl() {
  const { diyQuotePosition, setDiyQuotePosition } = useContext(AppContext)

  const handlePostion = event => {
    setDiyQuotePosition({ ...diyQuotePosition, [event.target.name]: `${event.target.value}px` })
  }

  const centerH = () => {
    let calculatedLeft = (600 - parseInt(diyQuotePosition.width)) / 2
    setDiyQuotePosition({ ...diyQuotePosition, left: `${calculatedLeft}px` })
  }

  return (
    <div className="position-control-holder">
      <TextField
        label="Quote Width"
        size="small"
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>,
        }}
        inputProps={{ name: "width" }}
        onChange={handlePostion}
      />
      <TextField
        label="Position from Top"
        size="small"
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>,
        }}
        // value={diyQuotePosition.top}
        inputProps={{ name: "top" }}
        onChange={handlePostion}
      />
      <TextField
        label="Position from Left"
        size="small"
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>,
        }}
        // value={diyQuotePosition.left}
        inputProps={{ name: "left" }}
        onChange={handlePostion}
      />
      <Button variant="outlined" onClick={centerH}>
        Center Horizontally
      </Button>
      <Button variant="outlined">Center Vertically</Button>
    </div>
  )
}
