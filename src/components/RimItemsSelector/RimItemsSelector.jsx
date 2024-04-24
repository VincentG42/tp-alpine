import React from 'react'

function RimItemsSelector({ rimsSelectionImage, rimOptions, changeRim }) {
    return (
        <>
            <div className="flex justify-center gap-4 h-full lg:pl-8">
                    {rimOptions.map(rim => (
                        <div key={rim.name} className=" flex flex-col justify-center items-center px-4 w-1/2 cursor-pointer" onClick={() => changeRim(rim.name, rim.price, rim.code)}>
                            <img src={rimsSelectionImage[rim.code]} alt="jantes" className='max-h-32' />
                            <p>{rim.name}</p>
                            <p>{rim.price} €</p>
                        </div>
                    ))}
            </div></>
    )
}

export default RimItemsSelector