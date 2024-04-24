import React from 'react'
import NextButton from './NextButton'

function configBottomBar({ selectedCarAndOptions, changeActiveDiv }) {
    return (
        <>
            <div className="p-2 md:p-4 lg:p-6 bg-slate-100 text-slate-900  lg:text-xl font-bold text-center"> Prix  de la configuration: {selectedCarAndOptions.price} €</div>
            <div className="font-bold text-slate-50 text-xl px-8">
                <p>Alpine A110 "{selectedCarAndOptions.version}" édition</p>
            </div>
            <div className=" p-2 md:p-4 lg:p-6 bg-slate-100 text-slate-900 lg:text-xl font-bold text-center" ><NextButton changeActiveDiv={changeActiveDiv} /></div>
        </>
    )
}

export default configBottomBar