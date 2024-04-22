import { Children, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedPaint, changedSelectedRim, changeSelectedSeddlery } from "../../features/selection/selectionSlice";
import ConfigBottomBar from "../configBottomBar/configBottomBar";
import PaintConfig from "../PaintConfig/PaintConfig";
import RimConfig from "../RimConfig/RimConfig";
import SeddleryConfig from "../SeddleryConfig/SeddleryConfig";
import EquipementConfig from "../EquipementConfig/EquipementConfig";
import Summary from "../Summary/Summary";




function Configurator() {
    const dispatch = useDispatch()

    //store.selection = slice de la configuration choisie
    const selectedCarAndOptions = useSelector((store) => store.selection);

    //slice des options possibles
    const options = useSelector((store) => store.options.options);

    //selection la bonne 'galerie' d'images en fonction de la version

    const imageManager = useSelector((store) => selectedCarAndOptions.version === 'pure' ? store.images.pure : store.images.legende);

    //selection des images pour la vue externe de la voiture
    const [carousselImages, setCarousselImages] = useState(imageManager.white.caroussel);

    //selection des images pour les jantes
    const [selectedRimImageSource, setSelectedRimImageSource] = useState(imageManager.white.rims)
    const [rimImageSrc, setRimImageSrc] = useState(selectedRimImageSource[0].image);


    // recup des images pour le choix des couleurs
    const colorsImages = useSelector((store) => store.images.colorSelection);

    //setter peinture change peitnure dans la vue "peinture" et "jantes"
    function changePaint(name, price, code) {
        dispatch(changeSelectedPaint({
            colorName: name,
            colorPrice: price,
            colorCode: code
        }))


        const colorImages = imageManager[code]; // Accède à l'objet correspondant à la couleur

        setCarousselImages(colorImages?.caroussel);
        setSelectedRimImageSource(colorImages?.rims);

    }

    // setter pour que la vue des jantes se mette à jour en fonction de la couleur carrosiere choisie
    useEffect(() => {
        setRimImageSrc(selectedRimImageSource[0].image)
    }, [selectedRimImageSource])
    //selection des images et infos des jantes en fonction du choix de la version
    const rimsSelectionImage = useSelector((store) => selectedCarAndOptions.version === 'pure' ? store.images.rimsSelection.pure : store.images.rimsSelection.legend);

    const rimOptions = selectedCarAndOptions.version === 'pure' ? options.rims.pure : options.rims.legend

    //selection des images et infos de l'interieur en fonction du choix de la version
    const seddlerySelectionImages = useSelector((store) => selectedCarAndOptions.version === 'pure' ? store.images.seddlerySelection.pure : store.images.seddlerySelection.legend);
    const seddleryOptions = selectedCarAndOptions.version === 'pure' ? options.seddlery.pure : options.seddlery.legend

    //setters vue sellerie
    const [seddleryImageSrc, setSeddleryImageSrc] = useState(imageManager.seddlery[0][0]);
    function changeSeddlery(name, price, code) {
        dispatch(changeSelectedSeddlery({
            seddleryName: name,
            seddleryPrice: price,
            seddleryCode: code
        }))
        code === 0 ? setSeddleryImageSrc(imageManager.seddlery[0][0]) : setSeddleryImageSrc(imageManager.seddlery[1][0])


    }

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

    //gestion affichage des div
    const currentOption = useSelector((store) => store.options.currentOption)


    return (
        <div className="flex flex-col">
            {/* bottom bar position fixed */}
            <div className="w-full bg-slate-900 text-slate-100 flex justify-between items-center h-24 fixed bottom-0 z-50">
                <ConfigBottomBar selectedCarAndOptions={selectedCarAndOptions} />
            </div>

                {/* couleur config */}
                {currentOption === 0 &&
                    <div id="option-1" className="h-screen">
                        <PaintConfig options={options}
                            carousselImages={carousselImages}
                            colorsImages={colorsImages}
                            changePaint={changePaint} />
                    </div>
                }

                {/* jantes config */}
                {currentOption === 1 &&

                    <div id="option-2" className="h-screen">
                        <RimConfig options={options}
                            selectedCarAndOptions={selectedCarAndOptions}
                            rimsSelectionImage={rimsSelectionImage}
                            rimOptions={rimOptions}
                            changeRim={changeRim}
                            rimImageSrc={rimImageSrc} />
                    </div>
                }
                {/* sellerie config */}
                {currentOption === 2 &&

                    <div id="option-3" className="h-screen">
                        <SeddleryConfig options={options}
                            seddlerySelectionImages={seddlerySelectionImages}
                            seddleryOptions={seddleryOptions}
                            changeSeddlery={changeSeddlery}
                            seddleryImageSrc={seddleryImageSrc} />
                    </div>
                }
                {/* equipements config */}
                {currentOption === 3 &&

                    <div id="option-4" className="h-screen">
                        <EquipementConfig options={options} selectedCarAndOptions={selectedCarAndOptions} />
                    </div>
                }

                {currentOption === 4 &&
                <div id="option-5" className="h-screen flex justify-center items-center">Coming Soon</div>}



                {currentOption === 5 &&
                <div id="summary" className="h-screen">
                    <Summary />    
                </div>}

        </div>
    );
}


export default Configurator;


