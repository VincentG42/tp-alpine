import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './DriveDetails.css'
import { changeComfortOPtions } from '../../features/selection/selectionSlice';

function ComfortDetails({options, setShowComfortDetails}) {


//changeComfortOPtions
  const dispatch = useDispatch()

  const imageManager = useSelector((store) => store.images.equipments);

  function handleComfortOptions(name, price, code) {
    dispatch(changeComfortOPtions({
      comfortName: name,
      comfortPrice: price,
      comfortCode: code 
    }))
  }

  return (
    <div className='absolute z-10  backdrop-blur bg-slate-900 bg-opacity-30 h-5/6 w-full flex justify-center items-center'>
      <div id="driveModal" className='bg-slate-100 border border-slate-900 text-slate-900 w-5/6 pb-16 flex flex-col gap-8 p-8 relative' >
      <button className='absolute top-0 right-1 font-bold text-slate-900'onClick={() => setShowComfortDetails(false)}> X</button>
        <h3 className='text-center text-xl font-bold'>{options.equipements.comfort.title}</h3>
        <div className='flex  flex-col gap-1'>
          {options.equipements.comfort.declinaison.map((assist) =>
            <div key={assist.code} >
              <input type="checkbox" id={assist.code} name='assist' className="hidden" defaultChecked ={assist.code ===0 || assist.code === 3 ? true:false} disabled ={assist.code ===0 || assist.code === 3 ? true:false}/>
              <label htmlFor={assist.code} className='flex flex-col md:flex-row justify-between gap-2 px-4 py-2 text-sm md:text-base' onClick={() => handleComfortOptions(assist.name, assist.price, assist.code)}>
                <img src={imageManager?.comfort[assist.code]} alt="park assist" className='w-16' />
                <span>{assist.name}</span>
                <span>{assist.price} € </span>
              </label>
            </div>
          )}
        </div>

        
      </div>
    </div>
  )
}

export default ComfortDetails
