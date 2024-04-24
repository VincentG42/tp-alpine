import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetOptions } from '../../features/selection/selectionSlice'
import { resetCurrentOption } from '../../features/options/optionsSlice'

function Summary({setSelectorShown}) {

    const dispatch = useDispatch()


    const chosenCarAndOptions = useSelector(store => store.selection)

    function handleReset() {
        dispatch(resetOptions())
        console.log('hello')
        dispatch(resetCurrentOption())
        setSelectorShown(false)
        
    }

    return (
        <div className='flex flex-col w-full pt-16 bg-slate-50'>
            <h4 className='w-full bg-slate-900 text-slate-100 text-center text-3xl font-bold py-4'>Votre configuration</h4>
            <div className='flex flex-col md:flex-row justify-around px-4'>
                <h3 className='text-2xl font-bold py-4'> Alpine A110 "{chosenCarAndOptions.version}" Edition</h3>
                <p className='text-2xl font-bold py-4'>Prix : {chosenCarAndOptions.price} €</p>

            </div>


            <div className='flex overflow-y-auto flex-col lg:flex-row px-4 gap-8'>

                <div className='flex flex-col gap-4 lg:w-1/2 overflow-y-auto'>
                    <h3 className='text-2xl font-semibold underline'>Rappel des options choisies:</h3>
                    <div className='flex w-full justify-between border-b border-slate-900 px-2'>
                        <h5 className='text-slate-900'>Couleur: {chosenCarAndOptions.color.name}</h5>
                        <p>{chosenCarAndOptions.color.price === 0 ? 'inclus' : `${chosenCarAndOptions.color.price} €`}</p>
                    </div>

                    <div className='flex w-full justify-between border-b border-slate-900 px-2'>
                        <h5 className='text-slate-900'>Jantes: {chosenCarAndOptions.rims.name}</h5>
                        <p>{chosenCarAndOptions.rims.price === 0 ? 'inclus' : `${chosenCarAndOptions.rims.price} €`}</p>
                    </div>

                    <div className='flex w-full justify-between border-b border-slate-900 px-2'>
                        <h5 className='text-slate-900'> Sellerie: <span>{chosenCarAndOptions.seddlery.name}</span></h5>
                        <p>{chosenCarAndOptions.seddlery.price === 0 ? 'inclus' : `${chosenCarAndOptions.seddlery.price} €`}</p>
                    </div>

                    <div className='flex flex-col w-full border-b border-slate-900 px-2'>
                        <h5 className='text-slate-900'>Equipements:</h5>
                        <div className='flex w-full justify-between px-2'>
                            {chosenCarAndOptions.equipements.design.length > 0 &&
                                <div className='flex w-full flex-col justify-start pl-2'>
                                    <h6>Design:</h6>

                                    {chosenCarAndOptions.equipements.design.map(design => <div  key={design.name} className='flex w-full justify-between px-2 bg-slate-200'> <span>{design.name}</span> <span> {design.price} €</span></div>)}

                                </div>
                            }
                        </div>

                        {chosenCarAndOptions.equipements.mediaAndNavigation.length > 0 &&
                            <div className='flex w-full flex-col justify-start pl-2'>
                                <h6>Media et Navigation:</h6>
                                <div>
                                    <p>{chosenCarAndOptions.equipements.mediaAndNavigation.audio.name}  {chosenCarAndOptions.equipements.mediaAndNavigation.audio.price}€</p>
                                    {chosenCarAndOptions.equipements.mediaAndNavigation.telemetrics !== null && <p>{chosenCarAndOptions.equipements.mediaAndNavigation.telemetrics.name} {chosenCarAndOptions.equipements.mediaAndNavigation.telemetrics.price}€</p>}
                                </div>
                            </div>
                        }

                        <div className='flex w-full flex-col justify-start pl-2'>
                            <h6>Confort:</h6>
                            {chosenCarAndOptions.equipements.confort.map(confort => <div key={confort.name} className='flex w-full justify-between px-2 bg-slate-200'> <span>{confort.name}</span> <span> {confort.price === 0 ? 'inclus' : `${confort.price} €`} </span></div>)}
                        </div>

                        <div className='flex w-full flex-col justify-start pl-2'>
                            <h6>Conduite</h6>
                            {chosenCarAndOptions.equipements.drive.park !== null &&
                                            <p className='flex w-full justify-between px-2 bg-slate-200'><span>{chosenCarAndOptions.equipements.drive.park.name}</span> <span> {chosenCarAndOptions.equipements.drive.park.price}€</span> </p>}
                            {chosenCarAndOptions.equipements.drive.muffler !== null && <p className='flex w-full justify-between px-2 bg-slate-200'><span>{chosenCarAndOptions.equipements.drive.muffler.name}</span>  <span>{chosenCarAndOptions.equipements.drive.muffler.price}€</span></p>}
                        </div>

                        <div className='flex w-full flex-col justify-start pl-2'>
                            <h6>Personnalisation extérieure:</h6>
                            <div className='flex w-full justify-between px-2 bg-slate-200'>
                                <p>{chosenCarAndOptions.equipements.persoExterieur.caliper.name}</p>
                                <p>{chosenCarAndOptions.equipements.persoExterieur.caliper.price === 0 ? 'inclus' : `${chosenCarAndOptions.equipements.persoExterieur.caliper.price} €`}</p>
                            </div>


                            {chosenCarAndOptions.equipements.persoExterieur.logo !== null && <div className='flex w-full justify-between px-2 bg-slate-200'>
                                <span>{chosenCarAndOptions.equipements.persoExterieur.logo.name}</span>
                                <span> {chosenCarAndOptions.equipements.persoExterieur.logo.price}€</span>
                            </div>}

                        </div>

                        <div className='flex w-full flex-col justify-start pl-2'>
                            <h6>Personnalisation intérieure:</h6>
                            {chosenCarAndOptions.equipements.persoInterieur.map(perso => <div key={perso.name} className='flex w-full justify-between px-2 bg-slate-200'>
                                <span>{perso.name} </span>  <span> {perso.price === 0 ? 'inclus' : `${perso.price} €`} </span>
                            </div>)}
                        </div>
                    </div>

                </div>

                <div className='flex lg:flex-col justify-center items-center lg:w-1/2  bg-slate-100 gap-8'>
                <button  className='relative px-5 py-2.5 overflow-hidden group bg-slate-900 relative hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-900 transition-all ease-out duration-300'>
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span><span className="relative">Commander</span></button>
                                <button onClick={handleReset} className='relative px-5 py-2.5 overflow-hidden group bg-slate-900 relative hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-900 transition-all ease-out duration-300'>
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span><span className="relative">Recommander</span></button>
                </div>
            </div>
        </div>
    )
}

export default Summary