import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeLogo, changeSelectedCaliper } from '../../features/selection/selectionSlice';

function PersoExtDetails({ options, setShowPersoExtDetails }) {
    const dispatch = useDispatch()

    function handleBrakeCaliperChange(name, price, code) {
        dispatch(changeSelectedCaliper({
            caliperName: name,
            caliperPrice: price,
            caliperCode: code

        }))
    }

    function handleLogo(name, price) {
        dispatch(changeLogo({
            logoName: name,
            logoPrice: price
        }))
    }

    const imageManager = useSelector((store) => store.images.equipments.persoExt);


    return (
        <div className='absolute z-10  backdrop-blur bg-slate-900 bg-opacity-10 h-5/6 w-full flex justify-center items-center'>
            <div id="driveModal" className='bg-slate-100 border border-slate-900 text-slate-900 w-5/6 py-16 flex flex-col gap-8 p-8 relative' >
                <button className='absolute top-0 right-1 font-bold text-slate-900' onClick={() => setShowPersoExtDetails(false)}> X</button>
                <h3 className='text-center text-xl font-bold'>{options.equipements.persoExt.title}</h3>
                <div className='flex  flex-col gap-1'>
                    <h4 className='text-lg font-semibold'>Sysytème audio</h4>
                    {options.equipements.persoExt.brakeCaliper.map((caliper) =>
                        <div key={caliper.code}>
                            <input type="radio" id={caliper.code} name='assist' className="hidden" defaultChecked={caliper.code === 'caliper2' ? true : false}/>
                            <label htmlFor={caliper.code} className='flex justify-between gap-2 w-3/5 px-4 py-2' onClick={() => handleBrakeCaliperChange(caliper.name, caliper.price, caliper.code)}>
                                <img src={imageManager?.brakeCaliper[caliper.code].image} alt="park assist" className='w-16' />
                                <span>{caliper.name}</span>
                                <span>{caliper.price} € </span>
                            </label>
                        </div>
                    )}
                </div>

                <div className='flex flex-col gap-2'>
                    <h4 className='text-lg font-semibold'>Télémetrics</h4>
                    <div>
                        <input type="checkbox" name="muffler" id={options.equipements.persoExt.logo.code} className="hidden" />
                        <label htmlFor={options.equipements.persoExt.logo.code} className='flex justify-between gap-2 w-3/5 px-4 py-2' onClick={() => handleLogo(options.equipements.persoExt.logo.name, options.equipements.persoExt.logo.price)}>
                            <img src={imageManager?.logo} alt="echappement" className='w-16' />
                            <span>{options.equipements.persoExt.logo.name}</span>
                            <span>{options.equipements.persoExt.logo.price} € </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersoExtDetails