import React from 'react'
import { Link } from 'react-router-dom'
import "./Hamburgermenu.css"
import { MainContext, useContext } from '../context'
export const Hamburgermenu = () => {
    const {dropdownOpen,toggle,clickHandle} = useContext(MainContext)
    const hamburgercheck=()=> {
        var x = document.getElementById("myLinks");
        if (x.style.display === "flex") {
          x.style.display = "none";
        } else {
          x.style.display = "flex";
        }
      }
  return (
    <div style={{marginRight:"40px",display:"flex",alignItems:"center",justifyContent:"center",gap:"20px"}}>

  <div id="myLinks" className="buttongroup">
 
   <Link  className="hamburgerlinks" to="/news">NEWS</Link>
   <Link className="hamburgerlinks" to="/features">FEATURES</Link>
   <Link  className="hamburgerlinks" to="/topics">TOPICS</Link>
   <Link  className="hamburgerlinks" to="/video">VIDEO</Link>
   <Link className="hamburgerlinks"  to="/live">LİVE</Link>
   <Link  className="hamburgerlinks" to="/search">SEARCH</Link>
   
  </div>
  <a href="javascript:void(0);" class="icon" onClick={hamburgercheck}>
    <i style={{fontSize:"30px"}} className="fa fa-bars"></i>
  </a>
    </div>
  )
}
