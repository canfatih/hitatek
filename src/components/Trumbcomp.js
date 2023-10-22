import React, { useContext } from 'react'
import { MainContext } from '../context'
import "./Trumbcomp.css"
import pptrumb from "../images/pptrumb.png"
export const Trumbcomp = () => {
    const{mockdata} =useContext(MainContext)

  return (
    <div className="trumb">
        <h3>{mockdata.trumbtext}</h3>
        <div className="personcard">
       <img style={{width:"32px",height:"32px"}} src={pptrumb}></img>
       <span style={{color:"white"}}>ALFONS LOPEZ TENA</span>
       </div>
    </div>
  )
}
