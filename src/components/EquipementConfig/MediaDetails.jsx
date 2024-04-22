import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSelectedAudio, changeTelemetrics } from '../../features/selection/selectionSlice';

function MediaDetails({options, setShowMediaDetails}) {

    const dispatch = useDispatch()

    function handleAudioChange(name, price, code) {
        dispatch(changeSelectedAudio({
            audioName: name,
            audioPrice: price,
            audioCode: code

        }))
    }

    function handleTelemetrics(name, price) {
        dispatch(changeTelemetrics({
            telemetricsName: name,
            telemetricsPrice: price
        }))
    }

    const imageManager = useSelector((store) => store.images.equipments.media);


    return (
        <div className='absolute z-10  backdrop-blur bg-slate-900 bg-opacity-10 h-5/6 w-full flex justify-center items-center'>
            <div id="driveModal" className='bg-slate-100 border border-slate-900 text-slate-900 w-5/6 py-16 flex flex-col gap-8 p-8 relative' >
                <button className='absolute top-0 right-1 font-bold text-slate-900' onClick={() => setShowMediaDetails(false)}> X</button>
                <h3 className='text-center text-xl font-bold'>{options.equipements.mediaAndNavigation.title}</h3>
                <div className='flex  flex-col gap-1'>
                    <h4 className='text-lg font-semibold'>Sysytème audio</h4>
                    {options.equipements.mediaAndNavigation.audio.map((assist) =>
                        <div key={assist.code}>
                            <input type="radio" id={assist.code} name='assist' className="hidden" defaultChecked={assist.code === 'audio3' ? true : false}/>
                            <label htmlFor={assist.code} className='flex justify-between gap-2 w-3/5 px-4 py-2' onClick={() => handleAudioChange(assist.name, assist.price, assist.code)}>
                                <img src={imageManager?.audio[assist.code].image} alt="park assist" className='w-16' />
                                <span>{assist.name}</span>
                                <span>{assist.price} € </span>
                            </label>
                        </div>
                    )}
                </div>

                <div className='flex flex-col gap-2'>
                    <h4 className='text-lg font-semibold'>Télémetrics</h4>
                    <div>
                        <input type="checkbox" name="muffler" id={options.equipements.mediaAndNavigation.telemetrics.code} className="hidden" />
                        <label htmlFor={options.equipements.mediaAndNavigation.telemetrics.code} className='flex justify-between gap-2 w-3/5 px-4 py-2' onClick={() => handleTelemetrics(options.equipements.mediaAndNavigation.telemetrics.name, options.equipements.mediaAndNavigation.telemetrics.price)}>
                            <img src={imageManager?.navigation} alt="echappement" className='w-16' />
                            <span>{options.equipements.mediaAndNavigation.telemetrics.name}</span>
                            <span>{options.equipements.mediaAndNavigation.telemetrics.price} € </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaDetails