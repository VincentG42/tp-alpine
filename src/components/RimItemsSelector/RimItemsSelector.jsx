import React from 'react'

function RimItemsSelector({ rimsSelectionImage, rimOptions, changeRim }) {
    return (
        <>
            <div className="flex flex-col justify-center gap-4 h-full w-1/4 pl-8">
                <div className='flex justify-around text-center'>
                    {rimsSelectionImage.map(rim => (
                        <img key={rim.name} src={rim.image} alt="icone choix couleur" className=" w-1/4 hover:scale-110" />
                    ))}
                </div>

                <div className="flex justify-around text-center w-">
                    {rimOptions.map(rim => (
                        <div key={rim.name} className="px-4 w-1/4">
                            <p className="underline hover:cursor-pointer" onClick={() => changeRim(rim.name, rim.price, rim.code)}>{rim.name}</p>
                            <p>{rim.price} €</p>
                        </div>
                    ))}
                </div>


            </div></>
    )
}

export default RimItemsSelector