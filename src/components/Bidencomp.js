import React from 'react'
import "./Bidencomp.css"
export const Bidencomp = ({img ,contenth3 ,contentp, personimg, persontext,timeago}) => {
  return (
    <div className="bidencomp">
        <div className='bidenimage'>
<img  style={{width:"100%"}} src={img}></img>
        </div>
        <div className="bidentextgroup">
        <span className="timeago">{timeago}</span>
<h3>{contenth3}</h3>
<span className="cardbottomtext">{contentp}</span>
<div className="personcard">
       <img style={{width:"32px",height:"32px"}} src={personimg}></img>
       <span>{persontext}</span>
       </div>
        </div>
    </div>
  )
}
