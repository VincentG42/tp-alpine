import React from 'react'
import PaintView from '../PaintView/PaintView'
import PaintItemsSelector from '../PaintItemsSelector/PaintItemsSelector'

function PaintConfig({ options, carousselImages, colorsImages, changePaint }) {
    return (
        <>
            <div className="w-full bg-slate-900 text-slate-100 flex justify-center items-center h-1/6">
                <p className="text-3xl font-bold">{options.color.title}</p>
            </div>

            <div className="flex justify-center items-center h-5/6">
                <PaintView carousselImages={carousselImages} />

                <div className="flex flex-col justify-center gap-2 h-full">
                    <PaintItemsSelector colorsImages={colorsImages} changePaint={changePaint} options={options} />
                </div>
            </div>
        </>
    )
}

export default PaintConfig