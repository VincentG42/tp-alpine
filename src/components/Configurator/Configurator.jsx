// import { useEffect, useState } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";


function Configurator({ edition }) {


    const options = useSelector((store) => store.config.options);

    const version = useSelector((store) => (edition === 'pure') ? store.config.version[0] : store.config.version[1]);

    const imageManager = useSelector((store) => store.images);

    //gestion du prix
    const basePrice = version.price


    // couleurs
    const colorsImages = imageManager.colorSelection



    console.log(colorsImages);

    const [totalPrice, setTotalPrice] = useState(basePrice);

    const [chosenOptions, setChosenOptions] = useState([]);


    return (
        <div className="flex flex-col">
            <div>
                <div className="w-full bg-slate-900 text-slate-100 flex justify-center items-center h-24">
                    <p className="text-3xl font-bold">{options.color.title}</p>
                </div>


                <div className="flex justify-center items-center
                ">
                    <div>
                        <img src={imageManager.pure.white.caroussel[0]} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">

                        <div className="flex justify-center w-1/4 text-center">
                            {options.color.declinaison.map(color => (
                                <div>
                                    <p>{color.name}</p>
                                    <p>{color.price} €</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center w-1/4 text-center gap-8'>
                            {colorsImages.map(color => (
                                <img src={color.image} alt=" icone choix couleur" className="w-1/4 h-20" />
                            ))}
                        </div>

                    </div>
                </div>

            </div>




            <div className="w-full bg-slate-900 text-slate-100 flex justify-between items-center h-24 fixed bottom-0">
                <div className="h-5/6 bg-slate-100 text-slate-900 flex justify-center items-center ml-4 px-4 "> Prix total de la configuration : {totalPrice} €</div>
                <div className=" h-5/6 bg-slate-100 text-slate-900 flex justify-center items-center mr-4 px-4" >nextbutton</div>
            </div>

        </div>
    );
}

export default Configurator;


// console.log(Object.keys(options));

// const colors = useSelector((store) => store.images.colors);

// const [step, setStep] = useState(0);