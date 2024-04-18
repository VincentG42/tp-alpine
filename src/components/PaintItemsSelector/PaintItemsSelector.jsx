import React from 'react'

function PaintItemsSelector({ colorsImages, changePaint, options }) {
    return (
        <>
            <div className='flex justify-around text-center'>
                {colorsImages.map(color => (
                    <img key={color.name} src={color.image} alt="icone choix couleur" className="h-20 w-1/4hover:border border-slate-900" />
                ))}
            </div>

            <div className="flex justify-around text-center">
                {options.color.declinaison.map(color => (
                    <div key={color.name} className="px-4 w-1/4">
                        <p className="underline hover:cursor-pointer" onClick={() => changePaint(color.name, color.price, color.code)}>{color.name}</p>
                        <p>{color.price} €</p>
                    </div>
                ))}
            </div></>
    )
}

export default PaintItemsSelector