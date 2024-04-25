import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Configurator from '../Configurator/Configurator';
import pure from '../../assets/images/car_selection/pure.png'
import legende from '../../assets/images/car_selection/legende.png'
import { changeVersion } from "../../features/selection/selectionSlice";
import { IoMdClose } from "react-icons/io";


function Selector({openSelector}) {
    //useSelector pour avoir les infos des voitures venant de configuratorSlice
    const cars = useSelector((store) => store.options.version);

    const dispatch = useDispatch();




    //conditionnal rendering logic
    const [selectorShown, setSelectorShown] = useState(true);
    const [chosenCarEdition, setChosenCarEdition] = useState();

    function handleMouseOver(event) {
        setChosenCarEdition(event.target.id);
    }


    const handleCardClick = () => {
        if(chosenCarEdition === 'légende'){
            dispatch(changeVersion());
        }

        setSelectorShown(false);
    };



    return (
        <div className='h-screen z-10'>
            <button onClick={() => openSelector(false)} className='z-20 size-8 absolute top-4 right-4 text-2xl bg-slate-100 rounded-full text-slate-900 border border-slate-900'> <IoMdClose style={{transform:'translateX(3px)'}}/></button>
            {selectorShown ? (
                <div className='flex flex-col justify-center items-center h-screen'>
                    {cars.map(car => (
                        <div id={car.name} key={car.name}  onMouseEnter={handleMouseOver} className='flex flex-col md:flex-row justify-center items-center p-4 gap-4 lg:gap-16 '>
                            <img src={car.name === 'pure' ? pure : legende} className={'w-1/2'} alt={car.name} />
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xl font-bold'> Alpine A110 "<span className='capitalize'>{car.name}</span>" Edition</h3>
                                <p className='font-bold text-xl'> <span className='italic'>A partir de </span> {car.price} €</p>
                                <p className='font-bold'><span className='text-slate-400'>Puissance :</span> {car.power}</p>
                                <p className='font-bold'><span className='text-slate-400'>Vitesse max. :</span> {car.maxSpeed} km/h</p>
                                <p className='font-bold'><span className='text-slate-400'>Boite de vitesse :</span> {car.transmission}</p>

                            </div>
                            <button id={car.name} onClick={handleCardClick} className='relative px-5 py-2.5 overflow-hidden group bg-slate-900 relative hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-900 transition-all ease-out duration-300'>
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span><span className="relative">Choisir</span>
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <Configurator edition={chosenCarEdition} setSelectorShown={setSelectorShown} />
            )}
        </div>
    );
}

export default Selector