import React from "react"
import "../styles/diy.css"
import TextControl from "./TextControl"
import DiyPost from "./DiyPost"
import ImageControl from "./ImageControl"

export default function Diy() {
  return (
    <section className="diy-container">
      <TextControl />
      <DiyPost />
      <ImageControl />
    </section>
  )
}
