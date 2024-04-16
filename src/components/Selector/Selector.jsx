import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Configurator from '../Configurator/Configurator';
import { useEffect } from 'react';

function Selector() {
    //useSelector pour avoir les infos des voitures venant de configuratorSlice
    const cars = useSelector((store) => store.config.version);


    //conditionnal rendering logic
    const [selectorShown, setSelectorShown] = useState(true);
    const [chosenCarEdition, setChosenCarEdition] = useState();

    function handleMouseOver(event) {
        setChosenCarEdition(event.target.id);
    }

    useEffect(() => {
        console.log(chosenCarEdition);
    }, [chosenCarEdition]);


    const handleCardClick = () => {

        setSelectorShown(false);

        // console.log(chosenCarEdition);
    };



    return (
        <div>
            {selectorShown ? (
                <div className='flex  justify-center items-center'>
                    {cars.map(car => (
                        <div id={car.name} className='flex flex-col justify-center items-center border-y-2 border-x border-slate-900 p-5 w-1/2 gap-4'>
                            <h3 className='text-xl font-bold'> Alpine A110 "{car.name}" Edition</h3>
                            <p className='font-bold'><span className='text-slate-400'>Puissance :</span> {car.power}</p>
                            <p className='font-bold'><span className='text-slate-400'>Vitesse max. :</span> {car.maxSpeed} km/h</p>
                            <p className='font-bold'><span className='text-slate-400'>Boite de vitesse :</span> {car.transmission}</p>
                            <button id={car.name} onMouseEnter={handleMouseOver} onClick={handleCardClick} className='relative px-5 py-2.5 overflow-hidden group bg-slate-900 relative hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-900 transition-all ease-out duration-300'>
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span><span className="relative">Choisir</span></button>
                        </div>
                    ))}
                </div>
            ) : (
                <Configurator edition={chosenCarEdition} />
            )}
        </div>
    );
}

export default Selector