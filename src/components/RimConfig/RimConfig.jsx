import React from 'react'
import ViewRim from '../ViewRim/ViewRim'
import RimItemsSelector from '../RimItemsSelector/RimItemsSelector'

function RimConfig({ options, rimsSelectionImage, rimOptions, changeRim, rimImageSrc }) {
    return (
        <>
            <div className="w-full bg-slate-900 text-slate-100 flex justify-center items-center h-1/6">
                <p className="text-3xl font-bold">{options.rims.title}</p>
            </div>

            <div className="flex  flex-col-reverse lg:flex-row lg:justify-around  justify-center items-center h-5/6">

                <RimItemsSelector rimsSelectionImage={rimsSelectionImage} rimOptions={rimOptions} changeRim={changeRim} />

                <div className="lg:w-2/3 flex lg:justify-end lg:items-start">
                    <ViewRim rimImageSrc={rimImageSrc} />
                </div>
            </div></>
    )
}

export default RimConfig