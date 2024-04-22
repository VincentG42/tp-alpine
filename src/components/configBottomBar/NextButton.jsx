import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentOption } from '../../features/options/optionsSlice'

function NextButton() {

    const dispatch = useDispatch()

    function handleCurrentOption() {
        dispatch(changeCurrentOption())
    }



    return (
        <div onClick={ handleCurrentOption} className='cursor-pointer'>NextButton</div>
    )
}

export default NextButton