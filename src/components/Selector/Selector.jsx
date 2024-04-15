import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Configurator from '../Configurator/Configurator';

function Selector() {
    //conditionnal rendering logic
    const [selectorShown, setDiv1Shown] = useState(true);
    const [chosenCarEdition, setChosenCarEdition] = useState();

    const handleCardClick = (e) => {
        setDiv1Shown(false);
        setChosenCarEdition (e.target.id)

        console.log(chosenCarEdition);
    };

    //useSelector pour avoir els infos des voitures venant de configuratorSlice
    const cars = useSelector((store) => store.config.version);


    return (
        <div>
            {selectorShown ? (
                <div id={cars[0].name}>
                    <h3 className='text-xl font-bold'> Alpine A110 "{cars[0].name}" Edition</h3>
                    <p className='font-bold'><span className='text-slate-400'>Puissance</span> {cars[0].power}</p>
                    <p className='font-bold'><span className='text-slate-400'>Vitesse max.</span> {cars[0].maxSpeed} km/h</p>
                    <p className='font-bold'><span className='text-slate-400'>Boite de vitesse</span> {cars[0].transmission}</p>
                    <button id = {cars[0].name} onClick={handleCardClick} className ='relative px-5 py-2.5 overflow-hidden group bg-slate-500 relative hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-400 transition-all ease-out duration-300'> 
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span><span className="relative">Choisir</span></button>

                </div>
            ) : (
                <Configurator edition = {chosenCarEdition} />
            )}
        </div>
    );
}

export default Selector