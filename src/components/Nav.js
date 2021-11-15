import React from "react"
import { Route, Link } from "react-router-dom"
import "../styles/nav.css"
import logoImg from "../images/cropped-resize.png"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Tooltip from "@mui/material/Tooltip"
import FormatPaintIcon from "@mui/icons-material/FormatPaint"

export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/" className="nav-links">
          <img src={logoImg} />
        </Link>
      </div>
      <div className="nav-icons">
        <Link to="/favorites" className="fav-link">
          <Tooltip title="Favortite quote list" placement="bottom">
            <FavoriteIcon style={{ color: "#6f6b63" }} />
          </Tooltip>
        </Link>
        <Link to="/diy" className="diy-link">
          <Tooltip title="Tweak it further!" placement="bottom">
            <FormatPaintIcon style={{ color: "#6f6b63" }} />
          </Tooltip>
        </Link>
      </div>
    </div>
  )
}
