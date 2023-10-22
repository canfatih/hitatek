import React, { useContext } from 'react'
import "./HeroComp.css"
import thumb from "../images/thumb.png"
import { MainContext } from '../context'
import pphero from "../images/pphero.png"
export const HeroComp = () => {
  
  const {mockdata}=useContext(MainContext)
  return (

    <div className='herocomp'>
   <img src={thumb}></img>
       <h2>{mockdata.herocomph2}</h2>
       <span className="herocomptext">{mockdata.herocompp}</span>
       <div className="personcard">
       <img style={{width:"32px",height:"32px"}} src={pphero}></img>
       <span>SHARAN DHALIWAL</span>
       </div>
      
        </div>
  )
}
