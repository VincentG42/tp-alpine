import React from 'react'
import SeddleryView from '../SeddleryView/SeddleryView'
import SeddleryItemsSelector from '../SeddleryItemsSelector/SeddleryItemsSelector'


function SeddleryConfig({ options, seddlerySelectionImages, seddleryOptions, changeSeddlery, seddleryImageSrc }) {
    return (
        <>
            <div className="w-full bg-slate-900 text-slate-100 flex justify-center items-center h-1/6">
                <p className="text-3xl font-bold">{options.seddlery.title}</p>
            </div>

            <div className="flex justify-around items-center h-5/6">
                <div className="w-3/4 h-full flex justify-end items-sart">
                    <SeddleryView seddleryImageSrc={seddleryImageSrc} />
                </div>

                <div className="flex flex-col justify-center gap-2 h-full w-1/2 pl-8">
                    <SeddleryItemsSelector seddlerySelectionImages={seddlerySelectionImages} seddleryOptions={seddleryOptions} changeSeddlery={changeSeddlery} />
                </div>


            </div>
        </>
    )
}

export default SeddleryConfig