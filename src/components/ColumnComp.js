import React, { useContext } from 'react'
import "./ColumnComp.css"
import colcartone from "../images/colcartone.png"
import { MainContext } from '../context'
import ppcolcart from "../images/ppcolcardone.png"
import colcardtwo from "../images/colcarttwo.png"
export const ColumnComp = () => {
  const{mockdata}=useContext(MainContext)
  return (
    <div className="columncomp">
      <div className="colcard">
        
        <img style={{width:"100%"}} src={colcartone}></img>
        
       
        <h3>{mockdata.colcartoneh3}</h3>
        <span className="colcartspan">{mockdata.colcartonep}</span>
        <div className="personcard">
<img src={ppcolcart}></img>
<span>ABDI ISMAIL SAMATAR</span>
        </div>
      </div>
      <div className="colcard">
        <img src={colcardtwo}></img>
        <h3>{mockdata.colcarttwoh3}</h3>
        <span className="colcartspan">{mockdata.colcarttwop}</span>
        <div className="personcard">
<span>WAQAS MIRZA</span>
        </div>
      </div>
      
    </div>
  )
}
