import React from 'react'
import "./Navi.css"
import trt from "../images/TRT.png"
import world from "../images/World.png"
import { MainContext, useContext } from '../context'
import { Link } from 'react-router-dom'
import vector from "../images/Vector.png"
import search from "../images/search.png"
import live from "../images/live.png"
import { useTranslation } from 'react-i18next'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Hamburgermenu } from './Hamburgermenu'
export const Navi = () => {
  const {dropdownOpen,toggle,clickHandle} = useContext(MainContext)
const {t}=useTranslation();

  return (
    <div className="navi">
      <div className="logo">
        <Link to="/">
          <img src={trt}></img>
          <img src={world}></img>
        </Link>
      </div>
      <div className="hamburgermenu">
<Hamburgermenu></Hamburgermenu>
      </div>
      <div className="navright">
      
<Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle style={{backgroundColor:"rgb(0, 137, 204)",border:"0px"}} caret>Change Language</DropdownToggle>
        <DropdownMenu>
          <DropdownItem   onClick={()=>clickHandle("tr")}>TR</DropdownItem>
          <DropdownItem onClick={()=>clickHandle("en")}>ENG</DropdownItem>
        </DropdownMenu>
      </Dropdown>
        <Link to="/news" style={{ textDecoration: "none"}}>
          <div className="navLinks">
          <span>{t('news')}</span>
            <img src={vector}></img>
          </div>
        </Link>
        <Link to="/features" style={{ textDecoration: "none" }}>
       
        <div className="navLinks">
          <span>{t('features')}</span>
            <img src={vector}></img>
          </div>
        </Link>
        
        <Link to="/topics" style={{ textDecoration: "none" }}>
          <div className="navLinks">
          <span>{t('topics')}</span>
            <img src={vector}></img>
          </div>

        </Link>
        <Link to="/video" style={{ textDecoration: "none" }}>
          <div className="navLinks">
          <span>{t('video')}</span>
            <img src={vector}></img>
          </div>

        </Link>
        <Link to="/live" style={{ textDecoration: "none", }}>
          <div className="navLinks">
          <img src={live}></img>
          <span>{t('live')}</span>
          </div>

        </Link>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <div className="navLinks" style={{backgroundColor:"rgb(0, 137, 204)",height:"48px",width:"48px"}}>
            <img src={search}></img>
          </div>
        </Link>
      </div>
    </div>
  )
}
