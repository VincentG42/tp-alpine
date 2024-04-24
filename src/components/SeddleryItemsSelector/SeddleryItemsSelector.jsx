import React from 'react'

function SeddleryItemsSelector({ seddlerySelectionImages, seddleryOptions, changeSeddlery }) {

    return (
        <>
            

            <div className="flex justify-around text-center">
                {seddleryOptions.map(seddlery => (
                    <div key={seddlery.name} onClick={() => changeSeddlery(seddlery.name, seddlery.price, seddlery.code)} className='hover:cursor-pointer w-1/3'>
                        <img src={seddlerySelectionImages[seddlery.id].image} alt="" />
                        <p className="underline" >{seddlery.name}</p>
                        <p>{seddlery.price} €</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SeddleryItemsSelector