import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './DriveDetails.css'
import { changeSelectedAssist, changeMuffler } from '../../features/selection/selectionSlice';


function DriveDetails({ options, setShowDriveDetails, image }) {
  const dispatch = useDispatch()

  function handleAssistChange(name, price, code) {
    dispatch(changeSelectedAssist({
      assistName: name,
      assistPrice: price,
      assistCode: code
      
    }))
  }

  function handleMuffler(name, price){
    dispatch(changeMuffler({
      mufflerName: name,
      mufflerPrice: price
    }))
  }

  const imageManager = useSelector((store) => store.images.equipments.drive);

  return (
    <div className='absolute z-10  backdrop-blur bg-slate-900 bg-opacity-10 h-5/6 w-full flex justify-center items-center'>
      <div id="driveModal" className='bg-slate-100 border border-slate-900 text-slate-900 w-5/6 py-16 flex flex-col gap-8 p-8 relative' >
      <button className='absolute top-0 right-1 font-bold text-slate-900'onClick={() => setShowDriveDetails(false)}> X</button>
        <h3 className='text-center text-xl font-bold'>{options.equipements.drive.title}</h3>
        <div className='flex  flex-col gap-1'>
          <h4 className='text-lg font-semibold'>Assistance au stationnement</h4>
          {options.equipements.drive.parkAssist.map((assist) =>
            <div key={assist.code}>
              <input type="radio" id={assist.code} name='assist' className="hidden" />
              <label htmlFor={assist.code} className='flex justify-between gap-2 w-3/5 px-4 py-2' onClick={() => handleAssistChange(assist.name, assist.price, assist.code)}>
                <img src={imageManager?.parkAssist[assist.code].image} alt="park assist" className='w-16' />
                <span>{assist.name}</span>
                <span>{assist.price} € </span>
              </label>
            </div>
          )}
          {/* <div className='flex gap-2' onClick={() => handleAssistChange(null, 0, null)}>
            <input type="radio" id='park0' name='assist' className='hidden'></input>
            <label htmlFor="park0" className='flex gap-2 w-3/5 px-4 py-2'> Non merci </label>

          </div> */}
        </div>

        <div className='flex  flex-col gap-2'>
          <h4 className='text-lg font-semibold'>Echappement Sport</h4>
          <div>
            <input type="checkbox" name="muffler" id={options.equipements.drive.muffler.code} className="hidden" />
            <label htmlFor={options.equipements.drive.muffler.code} className='flex justify-between gap-2 w-3/5 px-4 py-2' onClick={() => handleMuffler(options.equipements.drive.muffler.name, options.equipements.drive.muffler.price)}>
              <img src={imageManager?.muffler} alt="echappement" className='w-16' />
              <span>{options.equipements.drive.muffler.name}</span>
              <span>{options.equipements.drive.muffler.price} € </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DriveDetails