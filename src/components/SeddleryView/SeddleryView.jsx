import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


function SeddleryView({ seddleryImageSrc }) {

    const [changeSource, setChangeSource] = useState(0);

    function handleCarousselClickRight() {
        setChangeSource(changeSource === seddleryImageSrc.length - 1 ? 0 : changeSource + 1)
    }

    function handleCarousselClickLeft() {
        setChangeSource(changeSource === 0 ? seddleryImageSrc.length - 1 : changeSource - 1)
    }


    return (
        <>
            <button onClick={handleCarousselClickLeft}><FaChevronLeft style={{ fontSize: '2rem' }} /></button>
            <img src={seddleryImageSrc[changeSource]} alt="vue sellerie" className='lg:h-3/4 w-3/4' />
            <button onClick={handleCarousselClickRight}><FaChevronRight style={{ fontSize: '2rem' }} /></button>
        </>
    )
}

export default SeddleryView