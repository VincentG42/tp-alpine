import React from 'react'

function SeddleryItemsSelector({ seddlerySelectionImages, seddleryOptions, changeSeddlery }) {
    return (
        <>
            <div className='flex justify-center gap-4 text-center'>
                {seddlerySelectionImages.map(seddlery => (
                    <img key={seddlery.name} src={seddlery.image} alt="icone choix couleur" className=" w-1/3 hover:scale-110" />
                ))}
            </div>

            <div className="flex justify-center text-center">
                {seddleryOptions.map(seddlery => (
                    <div key={seddlery.name} className="px-8">
                        <p className="underline hover:cursor-pointer" onClick={() => changeSeddlery(seddlery.name, seddlery.price, seddlery.code)}>{seddlery.name}</p>
                        <p>{seddlery.price} €</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SeddleryItemsSelector