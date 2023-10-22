import React, { useContext } from 'react'
import { MainContext } from '../context'
import "./Rowcard.css"
export const Rowcard = ({number,content,person}) => {


  return (
    <div className="rowcard">

<span className="number">{number}</span>
<div className="banners">
<span>{content}</span>
<span style={{fontFamily:"Times New Roman', Times, serif",fontWeight:"700",fontSize:"12",lineHeight:"16px",letterSpacing:"1px"}}>{person}</span>
</div>
    </div>
  )
}
