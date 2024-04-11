import React from 'react'
import "../Component/Style1.css"
import Style from "../Component/Style.module.css"

function Function() {
  return (
    <>
        <p style={{color:'green', backgroundColor:'aqua'}}>1. This is p Tag</p>
        <p>2. This is p Tag</p>
        <p className={Style.abc}>3. This is p Tag</p>
        <p>4. This is p Tag</p>
    </>
    
  )
}

export default Function