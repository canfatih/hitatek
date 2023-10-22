import React from 'react'
import "./Bottombanner.css"
import { useTranslation } from 'react-i18next';
export const Bottombanner = ({img, contenth3, contentp, persontext}) => {
  const {t}=useTranslation();
  return (
    <div className="bottombanner">
<h3 className="titlebot">{t('editorspick')}</h3>
<img style={{width:"100%"}} src={img}></img>
<h3 className='rightbottombannerh3'>{contenth3}</h3>
<span className="rightbannerbottomp">{contentp}</span>
<span className="personrightbannerbottom"> {persontext}</span>
    </div>
  )
}
