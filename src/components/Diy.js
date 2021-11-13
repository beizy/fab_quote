import React from "react"
import "../styles/diy.css"
import TextControl from "./TextControl"
import DiyPost from "./DiyPost"
import PositionControl from "./PositionControl"

export default function Diy() {
  return (
    <section className="diy-container">
      <TextControl />
      <DiyPost />
      <PositionControl />
    </section>
  )
}
