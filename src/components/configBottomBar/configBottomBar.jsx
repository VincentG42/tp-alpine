import React from 'react'
import NextButton from './NextButton'

function configBottomBar({ selectedCarAndOptions, changeActiveDiv }) {
    return (
        <>
            <div className="h-5/6 bg-slate-100 text-slate-900 flex justify-center items-center ml-4 px-4 text-xl font-bold "> Prix  de la configuration: {selectedCarAndOptions.price} €</div>
            <div className="font-bold text-slate-50 text-xl">
                <p>Alpine A110 "{selectedCarAndOptions.version}" édition</p>
            </div>
            <div className=" h-5/6 bg-slate-100 text-slate-900 flex justify-center items-center mr-4 px-4" ><NextButton changeActiveDiv={changeActiveDiv} /></div>
        </>
    )
}

export default configBottomBar