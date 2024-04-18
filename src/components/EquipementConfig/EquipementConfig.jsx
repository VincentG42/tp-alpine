import React from 'react'
import { useSelector } from 'react-redux';

function EquipementConfig({ options, selectedCarAndOptions }) {

    const equipementsCategories =useSelector((store) => store.images.equipementsCategories);
console.log(equipementsCategories);
    return (
        <>
            <div className="w-full bg-slate-900 text-slate-100 flex justify-center items-center h-1/6">
                <p className="text-3xl font-bold">{options.equipements.title}</p>
            </div>

            <div className="flex justify-center items-center max-h-5/6 w-full flex-wrap gap-8 mt-12">
                {equipementsCategories.map((category) => (
                    <div className="w-1/5 flex flex-col justify-start items-center border border-slate-900 relative " key={category.name}>
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{category.name}</p>
                        <img src={category.image} alt={`categories d'equipemens ${category.name}`} />

                        </div>
                ))}


            </div>

        </>
    )
}

export default EquipementConfig