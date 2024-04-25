import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';

export const SendEmail = () => {
    const form = useRef();

    const apiKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const serviceId = process.env.REACT_APP_SERVICE_ID;

    const templateId = process.env.REACT_APP_TEMPLATE_ID;

    const chosenCarAndOptions = useSelector(store => store.selection)



    const mailBody = {
        body: `
            Votre configuration
        
            ${chosenCarAndOptions.version} Edition
            Prix : ${chosenCarAndOptions.price} €
        
            Rappel des options choisies:
                Couleur: ${chosenCarAndOptions.color.name}
                ${chosenCarAndOptions.color.price === 0 ? 'inclus' : `${chosenCarAndOptions.color.price} €`}
                Jantes: ${chosenCarAndOptions.rims.name}
                ${chosenCarAndOptions.rims.price === 0 ? 'inclus' : `${chosenCarAndOptions.rims.price} €`}
                Sellerie: ${chosenCarAndOptions.seddlery.name}
                ${chosenCarAndOptions.seddlery.price === 0 ? 'inclus' : `${chosenCarAndOptions.seddlery.price} €`}
        
            Equipements:
            ${chosenCarAndOptions.equipements.design.length > 0 && `
                Design:
                ${chosenCarAndOptions.equipements.design.map(design => `${design.name} - ${design.price} €`).join('\n')}
            `}
            ${chosenCarAndOptions.equipements.mediaAndNavigation.length > 0 && `
                Media et Navigation:
                ${chosenCarAndOptions.equipements.mediaAndNavigation.audio.name} ${chosenCarAndOptions.equipements.mediaAndNavigation.audio.price}€
                ${chosenCarAndOptions.equipements.mediaAndNavigation.telemetrics !== null && `${chosenCarAndOptions.equipements.mediaAndNavigation.telemetrics.name} ${chosenCarAndOptions.equipements.mediaAndNavigation.telemetrics.price}€`}
            `}
            ${chosenCarAndOptions.equipements.confort.length > 0 && `
                Confort:
                ${chosenCarAndOptions.equipements.confort.map(confort => `${confort.name} - ${confort.price === 0 ? 'inclus' : `${confort.price} €`}`).join('\n')}
            `}
            ${chosenCarAndOptions.equipements.drive.park !== null && `
                Conduite - Park Assist: ${chosenCarAndOptions.equipements.drive.park.name} - ${chosenCarAndOptions.equipements.drive.park.price}€
            `}
            ${chosenCarAndOptions.equipements.drive.muffler !== null && `
                Conduite - Echappement sport: ${chosenCarAndOptions.equipements.drive.muffler.name} - ${chosenCarAndOptions.equipements.drive.muffler.price}€
            `}
            ${chosenCarAndOptions.equipements.persoExterieur.caliper.name !== '' && `
                Personnalisation extérieure - Etriers de frein: ${chosenCarAndOptions.equipements.persoExterieur.caliper.name} - ${chosenCarAndOptions.equipements.persoExterieur.caliper.price === 0 ? 'inclus' : `${chosenCarAndOptions.equipements.persoExterieur.caliper.price} €`}
            `}
            ${chosenCarAndOptions.equipements.persoExterieur.logo !== null && `
                Personnalisation extérieure - Logo: ${chosenCarAndOptions.equipements.persoExterieur.logo.name} - ${chosenCarAndOptions.equipements.persoExterieur.logo.price}€
            `}
            ${chosenCarAndOptions.equipements.persoInterieur.length > 0 && `
                Personnalisation intérieure:
                ${chosenCarAndOptions.equipements.persoInterieur.map(perso => `${perso.name} - ${perso.price === 0 ? 'inclus' : `${perso.price} €`}`).join('\n')}
            `}
            `,
    };


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(`${serviceId}`, `${templateId}`, form.current, {
                publicKey: `${apiKey}`,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form}  className='flex flex-col gap-4'>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <input type='hidden' defaultValue={mailBody.body} name="message" />
            <button type="submit" value="Send" className='relative px-5 py-2.5 overflow-hidden group bg-slate-900 relative hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-slate-900 transition-all ease-out duration-300'>
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span><span className="relative">Commander</span></button>
        </form>
    );
};


// onSubmit={sendEmail} à mettre dans al balsie form pourr e activer la fonction d'envoi de mail (config avec mailtrap) donc je l'ai desactivée pour eviter l'envoi de mail inutile une fois le projet deployé