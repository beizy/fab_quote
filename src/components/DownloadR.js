// import React, { useState, useEffect, useContext, useRef } from "react"
// import { AppContext } from "../context"
// import { randomQuoteDownload } from "./apiCalls"

// export default function DownloadR() {
//   const { bruzuParams } = useContext(AppContext)

//   let imageUrl = null

//   useEffect(() => {
//     // randomQuoteDownload(
//     //   bruzuParams.bgUrl,
//     //   bruzuParams.qText,
//     //   bruzuParams.qAuthor,
//     //   bruzuParams.color,
//     //   bruzuParams.qAuthorTop
//     // ).then(data => (returnedImage = data))
//     const { bgUrl, qText, qAuthor, color, qAuthorTop } = bruzuParams

//     console.log(bgUrl)
//     console.log(qText)
//     console.log(qAuthor)
//     console.log(color)
//     console.log(qAuthorTop)

//     console.log(
//       `http://img.bruzu.com/?apiKey=BRUZU-T-v8xLDDd&backgroundImage=${bgUrl}&width=600&height=400&a.text=${qText}&a.textAlign=center&a.fontSize=32&a.color=${color}&b.text=${qAuthor}&b.textAlign=center&b.fontSize=16&b.color=${color}&b.top=${qAuthorTop}`
//     )
//   }, [])

//   return <div>{imageUrl}</div>
// }
