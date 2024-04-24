import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './DriveDetails.css'
import { changeDesignOptions } from '../../features/selection/selectionSlice';


function DesignDetails({ options, setShowDesignDetails }) {
    const imageManager = useSelector((store) => store.images.equipments.design);

    const dispatch = useDispatch();

    function handleDesignOptions(name, price, code) {
        dispatch(changeDesignOptions({
            designName: name,
            designPrice: price,
            designCode: code
        })) 
    }

    return (
        <div className='absolute z-10  backdrop-blur bg-slate-900 bg-opacity-30 h-5/6 w-full flex justify-center items-center translate-y-24 md:translate-y-0'>
            <div id="driveModal" className='bg-slate-100 border border-slate-900 text-slate-900 w-5/6 pb-16 flex flex-col gap-8 p-8 relative' >
                <button className='absolute top-0 right-1 font-bold text-slate-900' onClick={() => setShowDesignDetails(false)}> X</button>
                <h3 className='text-center text-xl font-bold'>{options.equipements.design.title}</h3>
                <div className='flex  flex-col gap-1'>
                    {options.equipements.design.declinaison.map((option) => 
                        <div key={option.code} >
                            <input type="checkbox" id={option.code} name='option' className="hidden" />
                            <label htmlFor={option.code} className='flex flex-col md:flex-row justify-between gap-2 px-4 py-2 text-sm md:text-base' onClick={() => handleDesignOptions(option.name, option.price, option.code)} >
                                <img src={imageManager?.[option.code]} alt="park option" className='w-16' />
                                <span>{option.name}</span>
                                <span>{option.price} € </span>
                            </label>
                        </div>
                    )}
                </div>


            </div>
        </div>
    )
}

export default DesignDetails
