import React, { useContext } from 'react'
import { MainContext } from '../context'
import { Rowcard } from './Rowcard'
import { useTranslation } from 'react-i18next'
import "./RowComp.css"

export const RowComp = () => {
  const{mockdata}=useContext(MainContext)
  const {t}=useTranslation();
  return (
    <div className="rowcomp">
      <h3>{t('popular')}</h3>
<Rowcard number="1" content={mockdata.topbannerone} person="AHSAN BUTT"></Rowcard>
<Rowcard number="2" content={mockdata.topbannertwo}person="CJ WERLEMAN"></Rowcard>
<Rowcard number="3" content={mockdata.topbannertree}person="ALFONS LOPEZ TENA"></Rowcard>
<Rowcard number="4"  content={mockdata.topbannerfour}person="ARIF RAFIQ"></Rowcard>
<Rowcard number="5"  content={mockdata.topbannerfive}person="ABDUL BASIT"></Rowcard>
    </div>
  )
}
