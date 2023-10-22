import React from 'react'
import "./Imagecontent.css"
export const Imagecontent = ({img ,contenth3 ,contentp, personimg, persontext,timeago}) => {
  return (
    <div className="imagecontent">
        <div className="bottomimages" >
<img style={{width:"100%"}} src={img}></img>
        </div>
        <div className="cardbottomcontent">
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
