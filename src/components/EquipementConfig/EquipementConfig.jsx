import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import DriveDetails from './DriveDetails';
import ComfortDetails from './ComfortDetails';
import DesignDetails from './DesignDetails';
import MediaDetails from './MediaDetails';
import PersoExtDetails from './PersoExtDetails';
import PersoIntDetails from './PersoIntDetails';

function EquipementConfig({ options, selectedCarAndOptions }) {

    const equipementsCategories =useSelector((store) => store.images.equipementsCategories);

    const[showDriveDetails,setShowDriveDetails]=useState(false)
    const[showComfortDetails,setShowComfortDetails]=useState(false)
    const [showDesignDetails, setShowDesignDetails] = useState(false);
    const [showMediaDetails, setShowMediaDetails] = useState(false);
    const [showPersoExtDetails, setShowPersoExtDetails] = useState(false);
    const [showPersoIntDetails, setShowPersoIntDetails] = useState(false);
    return (
        <>
            <div className="w-full bg-slate-900 text-slate-100 flex justify-center items-center h-1/6">
                <p className="text-3xl font-bold">{options.equipements.title}</p>
            </div>

                        {showDriveDetails && <DriveDetails options={options} setShowDriveDetails={setShowDriveDetails} />}
                        {showComfortDetails && <ComfortDetails options={options} setShowComfortDetails={setShowComfortDetails}/>}
                        {showDesignDetails && <DesignDetails options={options} setShowDesignDetails={setShowDesignDetails}/>}
                        {showMediaDetails && <MediaDetails options={options} setShowMediaDetails={setShowMediaDetails}/>}
                        {showPersoExtDetails && <PersoExtDetails options={options} setShowPersoExtDetails={setShowPersoExtDetails}/>}
                        {showPersoIntDetails && <PersoIntDetails options={options} setShowPersoIntDetails={setShowPersoIntDetails}/>}
            
            <div className="flex justify-center items-center w-full flex-wrap lg:gap-8 md:gap-4 gap-2 py-24 px-4 md:px-0">
                
                    <div className="lg:w-1/4 md:w-1/3 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer" onClick={() => setShowDriveDetails(true)}>
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[0].name}</p>
                        <img src={equipementsCategories[0].image} alt={`categories d'équipemens  ${equipementsCategories[0].name}`} />
                    </div>

                    <div className="lg:w-1/4 md:w-1/3 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer" onClick={() => setShowComfortDetails(true)}>
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[1].name}</p>
                        <img src={equipementsCategories[1].image} alt={`categories d'équipemens  ${equipementsCategories[1].name}`} />
                    </div>

                    <div className="lg:w-1/4 md:w-1/3 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer" onClick={() => setShowDesignDetails(true)}>
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[2].name}</p>
                        <img src={equipementsCategories[2].image} alt={`categories d'équipemens  ${equipementsCategories[2].name}`} />
                    </div>

                    <div className="lg:w-1/4 md:w-1/3 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer" onClick={() => setShowMediaDetails(true)}>
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[3].name}</p>
                        <img src={equipementsCategories[3].image} alt={`categories d'équipemens  ${equipementsCategories[3].name}`} />
                    </div>
                
                    <div className="lg:w-1/4 md:w-1/3 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer" onClick ={() => setShowPersoExtDetails(true)}>
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[4].name}</p>
                        <img src={equipementsCategories[4].image} alt={`categories d'équipemens  ${equipementsCategories[4].name}`} />
                    </div>

                    <div className="lg:w-1/4 md:w-1/3 flex flex-col justify-start items-center border border-slate-900 relative hover:scale-105 hover:shadow-lg cursor-pointer" onClick={() => setShowPersoIntDetails(true)}>
                        <p className='absolute top-4 w-full bg-slate-50 text-center'>{equipementsCategories[5].name}</p>
                        <img src={equipementsCategories[5].image} alt={`categories d'équipemens  ${equipementsCategories[5].name}`} />
                    </div>

            </div>

        </>
    )
}

export default EquipementConfig