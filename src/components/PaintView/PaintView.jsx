import React, { useState } from 'react'
import {  Tb360View } from "react-icons/tb";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
function PaintView({ carousselImages }) {

  const [changeSource, setChangeSource] = useState(0);

function handleCarousselClickRight() {
  setChangeSource (changeSource === carousselImages.length -1 ? 0 : changeSource +1)
}

function handleCarousselClickLeft() {
  setChangeSource (changeSource === 0 ? carousselImages.length -1 : changeSource -1)
}

  return (
    <div className='flex flex-col justify-center items-center lg:w-1/2'>
    
        <img src={carousselImages[changeSource]} alt="visuel voiture" />
      <div className='flex gap-4 -translate-y-16'>
        <button onClick={handleCarousselClickLeft}><FaChevronLeft /></button>
        <button ><Tb360View  style={{fontSize: '3rem'}}/></button>
        <button onClick={handleCarousselClickRight}><FaChevronRight /></button>
      </div>
    </div>
  )
}


export default PaintView

