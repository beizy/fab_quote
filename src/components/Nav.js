import React from "react"
import { Route, Link } from "react-router-dom"
import "../styles/nav.css"
import logoImg from "../images/cropped-resize.png"
import FavoriteIcon from "@mui/icons-material/Favorite"

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="nav-links">
        <img src={logoImg} />
      </Link>
      <Link to="/favorites" className="fav-link">
        {FavoriteIcon}
      </Link>
      <Link to="/diy" className="diy-link">
        Make My Own
      </Link>
    </div>
  )
}
