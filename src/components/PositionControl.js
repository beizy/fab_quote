import React, { useContext } from "react"
import { AppContext } from "../context"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import Button from "@mui/material/Button"

export default function PositionControl() {
  const { diyQuotePosition, setDiyQuotePosition, diyQuoteSize, setDiyQuoteSize } = useContext(AppContext)

  const handlePostion = event => {
    setDiyQuotePosition({ ...diyQuotePosition, [event.target.name]: `${event.target.value}px` })
  }

  const handleWidth = e => {
    setDiyQuoteSize({ ...diyQuoteSize, width: `${e.target.value}px` })
  }

  const center = (t, l) => {
    let topValue = t ? diyQuotePosition.top : `${parseInt((400 - diyQuoteSize.height) / 2)}px`
    let leftValue = l ? diyQuotePosition.left : `${parseInt((600 - diyQuoteSize.width) / 2)}px`

    setDiyQuotePosition({
      ...diyQuotePosition,
      left: leftValue,
      top: topValue,
    })
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
        onChange={handleWidth}
      />
      <TextField
        label="Position from Top"
        size="small"
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>,
        }}
        inputProps={{ name: "top" }}
        onChange={handlePostion}
      />
      <TextField
        label="Position from Left"
        size="small"
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>,
        }}
        inputProps={{ name: "left" }}
        onChange={handlePostion}
      />
      <Button variant="outlined" onClick={() => center(1, 0)}>
        Center Horizontally
      </Button>
      <Button variant="outlined" onClick={() => center(0, 1)}>
        Center Vertically
      </Button>
      <Button variant="outlined" onClick={() => center(0, 0)}>
        Center Absolute
      </Button>
      <p>Two positon inputs and center buttons will override each other.</p>
    </div>
  )
}
