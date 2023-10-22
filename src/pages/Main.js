import React, { useContext } from 'react'
import { ColumnComp } from '../components/ColumnComp'
import { HeroComp } from '../components/HeroComp'
import "./Main.css"
import { RowComp } from '../components/RowComp'
import trumbimg from "../images/trumb.png"
import { Trumbcomp } from '../components/Trumbcomp'
import { Imagecontent } from '../components/Imagecontent'
import { Bidencomp } from '../components/Bidencomp'
import { Bottombanner } from '../components/Bottombanner'
import { MainContext } from '../context'
import cardoneimg from "../images/cartoneimg.png"
import cardtwoimg from "../images/cardtwoimg.png"
import cardtreeimg from "../images/cardtreeimg.png"
import cardfourimg from "../images/cardfourimg.png"
import ppcardone from "../images/ppcardone.png"
import ppcardtwo from "../images/ppcarttwo.png"
import ppcardtree from "../images/ppcardtree.png"
import ppcardfour from "../images/ppcardfour.png"
import bidenimg from "../images/bidencomp.png"
import ppbiden from "../images/ppbidencomp.png"
import bottombanner from "../images/bottombanner.png"
import { useTranslation } from 'react-i18next'
const Main = () => {
  const{mockdata} =useContext(MainContext)
  const {t}=useTranslation();
  return (
    <div className="main">
        <h1>{t('opinion')}</h1>
        <div className="full-top-comp">
                <div className="leftfulltop">
                <HeroComp></HeroComp>
                </div>
<div className="rightfulltop">
        
        <ColumnComp></ColumnComp>
        

<RowComp></RowComp>


</div>

        </div>
        <div  style={{ backgroundImage:`url(${trumbimg})` ,width:"100%" }} className='trumbcomp'>
<Trumbcomp></Trumbcomp>
        </div>
        <div className="full-bottom-comp"> 
        <div className='bottomleft'>
<Imagecontent img={cardoneimg} contenth3={mockdata.imagecartoneh3} contentp={mockdata.imagecartonep} personimg={ppcardone} persontext="FAYSAL MOHAMAD" timeago="20 HOURS AGO"></Imagecontent>
<Imagecontent img={cardtwoimg} contenth3={mockdata.imagecarttwoh3} contentp={mockdata.imagecarttwop} personimg={ppcardtwo} persontext="TOM HUSSAIN" timeago="21 HOURS AGO"></Imagecontent>
<Bidencomp img={bidenimg} contenth3={mockdata.bidencomph3} contentp={mockdata.bidencompp} personimg={ppbiden} persontext="ALİ ÇINAR" timeago="2 DAYS AGO"></Bidencomp>
<Imagecontent img={cardtreeimg} contenth3={mockdata.imagecartbottomh3} contentp={mockdata.imagecartbottomp} personimg={ppcardtree} persontext="CJ WERLEMAN" timeago="2 DAYS AGO"></Imagecontent>
<Imagecontent img={cardfourimg} contenth3={mockdata.imagecartbottomtwoh3} contentp={mockdata.imagecartbottomtwop} personimg={ppcardfour} persontext="ARIF RAFİQ" timeago="5 DAYS AGO"></Imagecontent>
        </div>
        <div className='bottomright'>
<Bottombanner img={bottombanner} contenth3={mockdata.rightbannerh3} contentp={mockdata.rightbannerp} persontext="NAFEES MAHMUD"></Bottombanner>
        </div>


        </div>
    </div>
  )
}
export default Main;