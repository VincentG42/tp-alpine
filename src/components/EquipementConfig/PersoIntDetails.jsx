import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePersoIntOPtions } from '../../features/selection/selectionSlice';
import './DriveDetails.css'

function PersoIntDetails({ options, setShowPersoIntDetails }) {
    //changeComfortOPtions
    const dispatch = useDispatch()

    const imageManager = useSelector((store) => store.images.equipments);

    function handlepersoIntOptions(name, price, code) {
        dispatch(changePersoIntOPtions({
            persoIntName: name,
            persoIntPrice: price,
            persoIntCode: code
        }))
    }

    return (
        <div className='absolute z-10  backdrop-blur bg-slate-900 bg-opacity-30 h-5/6 w-full flex justify-center items-center translate-y-96 md:translate-y-0'>
            <div id="driveModal" className='bg-slate-100 border border-slate-900 text-slate-900 w-5/6 pb-16 flex flex-col gap-8 p-8 relative' >
                <button className='absolute top-0 right-1 font-bold text-slate-900' onClick={() => setShowPersoIntDetails(false)}> X</button>
                <h3 className='text-center text-xl font-bold'>{options.equipements.persoInt.title}</h3>
                <div className='flex  flex-col gap-1'>
                    {options.equipements.persoInt.declinaison.map((persoInt) =>
                        <div key={persoInt.code} >
                            <input type="checkbox" id={persoInt.code} name='persoInt' className="hidden" defaultChecked={persoInt.code === 1 ? true : false} />
                            <label htmlFor={persoInt.code} className='flex flex-col md:flex-row justify-between gap-2 px-4 py-2 text-sm md:text-base' onClick={() => handlepersoIntOptions(persoInt.name, persoInt.price, persoInt.code)}>
                                <img src={imageManager?.persoInt[persoInt.code]} alt="park persoInt" className='w-16' />
                                <span>{persoInt.name}</span>
                                <span>{persoInt.price} € </span>
                            </label>
                        </div>
                    )}
                </div>


            </div>
        </div>
    )
}
export default PersoIntDetails