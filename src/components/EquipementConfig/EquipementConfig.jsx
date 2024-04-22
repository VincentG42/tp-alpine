import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import DriveDetails from './DriveDetails';
import ComfortDetails from './ComfortDetails';
import DesignDetails from './DesignDetails';
import MediaDetails from './MediaDetails';

function EquipementConfig({ options, selectedCarAndOptions }) {

    const equipementsCategories =useSelector((store) => store.images.equipementsCategories);

    const[showDriveDetails,setShowDriveDetails]=useState(false)
    const[showComfortDetails,setShowComfortDetails]=useState(false)
    const [showDesignDetails, setShowDesignDetails] = useState(false);
    const [showMediaDetails, setShowMediaDetails] = useState(false);
    return (
        <>
            <div className="w-full bg-slate-900 text-slate-100 flex justify-center items-center h-1/6">
                <p className="text-3xl font-bold">{options.equipements.title}</p>
            </div>

                        {showDriveDetails && <DriveDetails options={options} setShowDriveDetails={setShowDriveDetails} />}
                        {showComfortDetails && <ComfortDetails options={options} setShowComfortDetails={setShowComfortDetails}/>}
                        {showDesignDetails && <DesignDetails options={options} setShowDesignDetails={setShowDesignDetails}/>}
                        {showMediaDetails && <MediaDetails options={options} setShowMediaDetails={setShowMediaDetails}/>}

            <div className="flex justify-center items-center max-h-5/6 w-full flex-wrap gap-8 mt-12">
                
                    <div className="w-1/4 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer" onClick={() => setShowDriveDetails(true)}>
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[0].name}</p>
                        <img src={equipementsCategories[0].image} alt={`categories d'équipemens  ${equipementsCategories[0].name}`} />
                    </div>

                    <div className="w-1/4 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer" onClick={() => setShowComfortDetails(true)}>
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[1].name}</p>
                        <img src={equipementsCategories[1].image} alt={`categories d'équipemens  ${equipementsCategories[1].name}`} />
                    </div>

                    <div className="w-1/4 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer" onClick={() => setShowDesignDetails(true)}>
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[2].name}</p>
                        <img src={equipementsCategories[2].image} alt={`categories d'équipemens  ${equipementsCategories[2].name}`} />
                    </div>

                    <div className="w-1/4 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer" onClick={() => setShowMediaDetails(true)}>
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[3].name}</p>
                        <img src={equipementsCategories[3].image} alt={`categories d'équipemens  ${equipementsCategories[3].name}`} />
                    </div>
                
                    <div className="w-1/4 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer">
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[4].name}</p>
                        <img src={equipementsCategories[4].image} alt={`categories d'équipemens  ${equipementsCategories[4].name}`} />
                    </div>

                    <div className="w-1/4 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer">
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[5].name}</p>
                        <img src={equipementsCategories[5].image} alt={`categories d'équipemens  ${equipementsCategories[5].name}`} />
                    </div>

            </div>

        </>
    )
}

export default EquipementConfig