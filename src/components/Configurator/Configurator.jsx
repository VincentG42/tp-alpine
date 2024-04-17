import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedPaint, changedSelectedRim } from "../../features/selection/selectionSlice";
import ViewRim from "../ViewRim/ViewRim";




function Configurator() {
    const dispatch = useDispatch()


    const selectedCarAndOptions = useSelector((store) => store.selection);

    const options = useSelector((store) => store.options.options);

    const imageManager = useSelector((store) => selectedCarAndOptions.name === 'pure' ? store.images.pure : store.images.legende);

    const [carousselImages, setCarousselImages] = useState(imageManager.white.caroussel[1]);

    const [selectedRimImageSource, setSelectedRimImageSource] = useState(imageManager.white.rims)
    const [rimImageSrc, setRimImageSrc] = useState(selectedRimImageSource[0].image);

    // couleurs

    const colorsImages = useSelector((store) => store.images.colorSelection);


    function changePaint(name, price, code) {
        dispatch(changeSelectedPaint({
            colorName: name,
            colorPrice: price,
            colorCode: code
        }))

        if (code === 'blue') {
            setCarousselImages(imageManager.blue.caroussel[1])
            setSelectedRimImageSource(imageManager.blue.rims)

        } else if (code === 'white') {
            setCarousselImages(imageManager.white.caroussel[1])
            setSelectedRimImageSource(imageManager.white.rims)

        } else if (code === 'black') {
            setCarousselImages(imageManager.black.caroussel[1])
            setSelectedRimImageSource(imageManager.black.rims)
        }
    }
    
console.log(selectedRimImageSource[0].image);
    //jantes
    const rimsSelectionImage = useSelector((store) => selectedCarAndOptions.version === 'pure' ? store.images.rimsSelection.pure : store.images.rimsSelection.legend);

    const rimOptions = selectedCarAndOptions.version === 'pure' ? options.rims.pure : options.rims.legend



    function changeRim(name, price, code) {

        dispatch(changedSelectedRim({
            rimName: name,
            rimPrice: price,
            rimCode: code
        }))
        if (code === 0) {
            setRimImageSrc(selectedRimImageSource[0].image)

        } else if (code === 1) {
            setRimImageSrc(selectedRimImageSource[1].image)

        } else if (code === 2) {
            setRimImageSrc(selectedRimImageSource[2].image)
        }
    }


    return (
        <div className="flex flex-col">
            {/* couleur config */}
            <div id="option-1" className="h-screen">
                <div className="w-full bg-slate-900 text-slate-100 flex justify-center items-center h-1/6">
                    <p className="text-3xl font-bold">{options.color.title}</p>
                </div>

                <div className="flex justify-center items-center h-5/6">
                    <div className="w-3/5 h-full flex justify-center items-center">
                        <img src={carousselImages} alt="visuel voiture" />
                    </div>

                    <div className="flex flex-col justify-center gap-2 h-full">
                        <div className='flex justify-around text-center'>
                            {colorsImages.map(color => (
                                <img key={color.name} src={color.image} alt="icone choix couleur" className="h-20 w-1/4hover:border border-slate-900" />
                            ))}
                        </div>

                        <div className="flex justify-around text-center">
                            {options.color.declinaison.map(color => (
                                <div key={color.name} className="px-4 w-1/4">
                                    <p className="underline hover:cursor-pointer" onClick={() => changePaint(color.name, color.price, color.code)}>{color.name}</p>
                                    <p>{color.price} €</p>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>


            </div>


            {/* jantes config */}
            <div id="option-2" className="h-screen">
                <div className="w-full bg-slate-900 text-slate-100 flex justify-center items-center h-1/6">
                    <p className="text-3xl font-bold">{options.rims.title}</p>
                </div>

                <div className="flex justify-center items-center h-5/6">

                    <div className="flex flex-col justify-center gap-2 h-full">
                        <div className='flex justify-around text-center'>
                            {rimsSelectionImage.map(rim => (
                                <img key={rim.name} src={rim.image} alt="icone choix couleur" className="h-20 w-1/4hover:border border-slate-900" />
                            ))}
                        </div>

                        <div className="flex justify-around text-center">
                            {rimOptions.map(rim => (
                                <div key={rim.name} className="px-4 w-1/4">
                                    <p className="underline hover:cursor-pointer" onClick={() => changeRim(rim.name, rim.price, rim.code)}>{rim.name}</p>
                                    <p>{rim.price} €</p>
                                </div>
                            ))}
                        </div>


                    </div>

                    <div className="w-3/5 h-full flex justify-center items-center">
                        <ViewRim  rimImageSrc={rimImageSrc}/>
                    </div>
                </div>

            </div>




            <div className="w-full bg-slate-900 text-slate-100 flex justify-between items-center h-24 fixed bottom-0">
                <div className="h-5/6 bg-slate-100 text-slate-900 flex justify-center items-center ml-4 px-4 "> Prix total de la configuration : {selectedCarAndOptions.price} €</div>
                <div className=" h-5/6 bg-slate-100 text-slate-900 flex justify-center items-center mr-4 px-4" >nextbutton</div>
            </div>

        </div>
    );
}


    export default Configurator;


// console.log(Object.keys(options));

