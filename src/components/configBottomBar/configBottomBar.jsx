import React from 'react'

function configBottomBar({ selectedCarAndOptions }) {
    return (
        <>
            <div className="h-5/6 bg-slate-100 text-slate-900 flex justify-center items-center ml-4 px-4 "> Prix  de la configuration: {selectedCarAndOptions.price} €</div>
            <div className="font-bold text-slate-50 text-xl">
                <p>Alpine A110 "{selectedCarAndOptions.version}" édition</p>
            </div>
            <div className=" h-5/6 bg-slate-100 text-slate-900 flex justify-center items-center mr-4 px-4" >nextbutton</div>
        </>
    )
}

export default configBottomBar