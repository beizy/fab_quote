import React, { useEffect, useContext } from "react"
import "../styles/diy.css"
import TextControl from "./TextControl"
import DiyPost from "./DiyPost"
import PositionControl from "./PositionControl"
import { AppContext } from "../context"

export default function Diy() {
  const { randomQuote, setDiyQuote } = useContext(AppContext)

  useEffect(() => {
    setDiyQuote({ author: randomQuote.quoteAuthor, text: randomQuote.quoteText })
  }, [])

  return (
    <section className="diy-container">
      <TextControl />
      <DiyPost />
      <PositionControl />
    </section>
  )
}
