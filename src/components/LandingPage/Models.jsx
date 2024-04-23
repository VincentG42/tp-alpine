import React, { useState } from 'react'
import a110 from '../../assets/images/landingpage/a110/models/bbb734ab5e.jpg'
import a110gt from '../../assets/images/landingpage/a110/models/a110gt.jpg'
import a110r from '../../assets/images/landingpage/a110/models/a110r.jpg'
import a110s from '../../assets/images/landingpage/a110/models/a110s.jpg'
import a110lemans from '../../assets/images/landingpage/a110/models/a110lemans.jpg'
import a110sanremo from '../../assets/images/landingpage/a110/models/a110sanremo.jpg'
import a110senstone from '../../assets/images/landingpage/a110/models/a110senstone.jpg'
import a110tourdecorse from '../../assets/images/landingpage/a110/models/a110tourdecorse.jpg'

import './models.css'


function Models({ openSelector }) {
    const [showDiv, setShowDiv] = useState(1);
    return (
        <div id='models' className='flex p-16'>
            <div className='w-1/3'>
                <h3 className='text-3xl font-bold'>Models</h3>
                <p className='text-2xl font-semibold ml-2 cursor-pointer' onClick={() => setShowDiv(1)}>Gamme A110</p>
                <p className='text-2xl font-semibold ml-2 cursor-pointer' onClick={() => setShowDiv(2)}>Séries Limitées</p>
            </div>
            {showDiv === 1 &&
                <div className='models-1 w-2/3 flex wrap gap-4'>
                    <div  className='w-1/2 h-80 border border-slate-900  relative flex flex-col justify-end cursor-pointer overflow-hidden'  onClick={() => openSelector(true)}>
                        <img src={a110} alt="Alpine A110" className='translate-y-20 hover:scale-110 duration-100' />
                        <div className='bg-slate-900 bg-opacity-20 text-slate-50 p-2 absolute bottom-0 w-full'>
                            <p >A110</p>
                            <p >Esprit Originel</p>
                        </div>
                    </div>
                    <div className='w-1/2 h-80 text-slate-100 border border-slate-900 relative  flex flex-col justify-end overflow-hidden'>
                        <img src={a110gt} alt="Alpine A110 GT" className='translate-y-20 hover:scale-110 duration-100' />
                        <div className='bg-slate-900 bg-opacity-20 text-slate-50 p-2 absolute bottom-0 w-full'>
                            <p>A110 GT</p>
                            <p>Le grand tourisme alpine</p>
                        </div>
                    </div >
                    <div className='w-1/2 h-80 text-slate-100 border border-slate-900 relative  flex flex-col justify-end overflow-hidden'>
                    <img src={a110s} alt="Alpine A110 S" className='translate-y-20 hover:scale-110 duration-100' />
                    <div className='bg-slate-900 bg-opacity-20 text-slate-50 p-2 absolute bottom-0 w-full'>
                            <p>A110 S</p>
                            <p>Elue sportive de l'année 2022</p>
                        </div>
                    </div>
                    <div className='w-1/2 h-80 text-slate-100 border border-slate-900 relative  flex flex-col justify-end overflow-hidden'>
                    <img src={a110r} alt="Alpine A110 R" className='translate-y-32 hover:scale-110 duration-100' />
                    <div className='bg-slate-900 bg-opacity-20  text-slate-50 p-2 absolute bottom-0 w-full'>
                            <p>A110 R</p>
                            <p>La plus radicale des A110</p>
                        </div>
                    </div>
                </div>
            }
            {showDiv === 2 &&
                <div className='models-2 w-2/3 flex wrap gap-4'>
                    <div className='w-1/2 h-80 text-slate-100 border border-slate-900 relative  flex flex-col justify-end overflow-hidden'>
                    <img src={a110lemans} alt="Alpine A110 le Mans" className=' hover:scale-110 duration-100 w-auto' />
                    <div className='bg-slate-900 bg-opacity-20 text-slate-50 p-2 absolute bottom-0 w-full'>
                            <p>A110 Lemans</p>
                            <p>La plus radicale des A110</p>
                        </div>
                    </div>
                    <div className='w-1/2 h-80 text-slate-100 border border-slate-900 relative  flex flex-col justify-end overflow-hidden'>
                    <img src={a110sanremo} alt="Alpine A110 San Remo" className='scale-250 duration-100' />
                    <div className='bg-slate-900 bg-opacity-20 translate-y- text-slate-50 p-2 absolute bottom-0 w-full'>
                            <p>A110 San Remo</p>
                            <p>La plus radicale des A110</p>
                        </div>
                    </div>
                    <div className='w-1/2 h-80 text-slate-100 border border-slate-900 relative  flex flex-col justify-end overflow-hidden'>
                    <img src={a110senstone} alt="Alpine A110 Senstone" className=' scale-250 duration-100' />
                    <div className='bg-slate-900 bg-opacity-20 translate-y- text-slate-50 p-2 absolute bottom-0 w-full'>
                            <p>A110 Senstone</p>
                            <p>La plus radicale des A110</p>
                        </div>
                    </div>
                    <div className='w-1/2 h-80 text-slate-100 border border-slate-900 relative  flex flex-col justify-end overflow-hidden'>
                    <img src={a110tourdecorse} alt="Alpine A110 Tour de Corse" className=' hover:scale-110 duration-100' />
                    <div className='bg-slate-900 bg-opacity-20 translate-y- text-slate-50 p-2 absolute bottom-0 w-full'>
                            <p>A110 Tour de Corse</p>
                            <p>La plus radicale des A110</p>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Models
