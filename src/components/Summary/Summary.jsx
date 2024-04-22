import React from 'react'
import { useSelector } from 'react-redux'

function Summary() {


    const chosenCarAndOptions = useSelector(store => store.selection)

    console.log(
        chosenCarAndOptions
    );
    return (
        <div className='flex flex-col space-between h-full w-full p-24 bg-slate-50 wrap'>
            <h4 className='w-full bg-slate-900 text-slate-100 text-center text-3xl font-bold py-4'>Votre configuration</h4>
            <h3 className='text-2xl font-bold py-4'> Alpine A110 "{chosenCarAndOptions.version}" Edition</h3>



            <h3 className='text-2xl font-semibold underline'>Rappel des options choisies:</h3>

            <div className='flex flex-col gap-2 w-1/2'>
                <div className='flex w-full justify-between'>
                    <h5 className='text-slate-900'>Couleur: {chosenCarAndOptions.color.name}</h5>
                    <p>{chosenCarAndOptions.color.price === 0 ? 'inclus' : `${chosenCarAndOptions.color.price} €`}</p>
                </div>
                <div className='flex w-full justify-between'>

                <h5 className='text-slate-900'>Jantes : {chosenCarAndOptions.rims.name}</h5>
                <p>{chosenCarAndOptions.rims.price === 0 ? 'inclus' : `${chosenCarAndOptions.rims.price} €`}</p>
</div>
                <h5 className='text-slate-900'> Sellerie : <span>{chosenCarAndOptions.seddlery.name}</span></h5>
                <p>Prix : <span>{chosenCarAndOptions.seddlery.price === 0 ? 'inclus' : `${chosenCarAndOptions.seddlery.price} €`}</span></p>

                <div>
                    <h5 className='text-slate-900'>Equipements</h5>
                    {chosenCarAndOptions.equipements.design.length > 0 &&
                        <div>
                            <h6>Design :</h6>
                            <div>
                                {chosenCarAndOptions.equipements.design.map(design => <p>{design.name} : {design.price} €</p>)}
                            </div>
                        </div>
                    }
                </div>

                <div>
                    {chosenCarAndOptions.equipements.mediaAndNavigation.length > 0 &&
                        <div>
                            <h6>Media et Navigation</h6>
                            <div>
                                <p>{chosenCarAndOptions.equipements.mediaAndNavigation.audio.name}  {chosenCarAndOptions.equipements.mediaAndNavigation.audio.price}€</p>
                                {chosenCarAndOptions.equipements.mediaAndNavigation.telemetrics !== null && <p>{chosenCarAndOptions.equipements.mediaAndNavigation.telemetrics.name} {chosenCarAndOptions.equipements.mediaAndNavigation.telemetrics.price}€</p>}
                            </div>
                        </div>
                    }
                </div>
                <div>
                    <h6>Confort</h6>
                    {chosenCarAndOptions.equipements.confort.map(confort => <p>{confort.name} : {confort.price === 0 ? 'inclus' : `${confort.price} €`} </p>)}
                </div>

                <div>
                    <h6>Conduite</h6>
                    {chosenCarAndOptions.equipements.drive.park !== null && <p>{chosenCarAndOptions.equipements.drive.park.name} : {chosenCarAndOptions.equipements.drive.park.price}€</p>}
                    {chosenCarAndOptions.equipements.drive.muffler !== null && <p>{chosenCarAndOptions.equipements.drive.muffler.name} : {chosenCarAndOptions.equipements.drive.muffler.price}€</p>}
                </div>

                <div>
                    <h6>Personnalisation extérieure</h6>
                    <p>{chosenCarAndOptions.equipements.persoExterieur.caliper.name}</p>
                    <p>{chosenCarAndOptions.equipements.persoExterieur.caliper.price}€</p>

                    <div>
                        {chosenCarAndOptions.equipements.persoExterieur.logo !== null && <p>{chosenCarAndOptions.equipements.persoExterieur.logo.name} : {chosenCarAndOptions.equipements.persoExterieur.logo.price}€</p>}
                    </div>
                </div>

                <div>
                    <h6>Personnalisation intérieur</h6>
                    {chosenCarAndOptions.equipements.persoInterieur.map(perso => <p>{perso.name} : {perso.price === 0 ? 'inclus' : `${perso.price} €`} </p>)}
                </div>

                <p>Prix : {chosenCarAndOptions.price} €</p>

            </div>
        </div>
    )
}

export default Summary