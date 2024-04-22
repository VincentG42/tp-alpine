import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    version: [

        { name: 'pure', code: 'pure', price: 54700, power: "252hp", maxSpeed: "240", transmission: "7-speed automatic" },
        { name: 'légende', code: 'legende', price: 58500, power: "300hp", maxSpeed: "250", transmission: "7-speed automatic" }
    ],
    options: {

        color: {
            title: 'Couleur',
            declinaison: [
                { name: "Teinte spéciale Bleu Alpine", price: 1800, code: 'blue' },
                { name: "Teinte métallisée Noir Profond", price: 840, code: 'black' },
                { name: "Peinture opaque Blanc Glacier", price: 0, code: 'white' },
            ],
        },

        rims: {
            title: 'Jantes',

                pure: [
                    { name: 'Standard', price: 0, code:0 },
                    { name: 'Serac', price: 1000, code:1 },
                ],
                legend: [
                    { name: 'Standard', price: 0, code:0 },
                    { name: 'Serac', price: 1000, code:1 },
                    { name: 'Légende', price: 0, code:2 },
                ],
        },

        seddlery: {
            title: 'Sellerie',
            pure: [
                { name: 'Sièges baquets en cuir noir et Dinamica', price: 0, code:0 },
                { name: 'Sièges Confort en cuir noir perforé', price: 800, code:1  },
            ],
            legend: [
                { name: 'Sièges Confort en cuir noir', price: 0, code:0 },
                { name: 'Sièges Confort en cuir brun', price: 800, code:1}
            ],
        },
        
        equipements: {
            title: "Equipements",
            design: {
                title: "Design",
                declinaison: [
                    { name: 'Pack héritage', price: 180, code:0 },
                    { name: 'Repose-pieds passager en aluminium', price: 96, code:1 }
                ],
            },
            mediaAndNavigation: {
                title: "Média & Navigation",
                audio: [
                    { name: "Système Audio Focal", price: 600, code:'audio1' },
                    { name: "Système Audio Focal Premium", price: 1200, code:'audio2' },
                    { name: "Système Audio standard", price: 0, code:'audio3' },
                ],
                telemetrics: { name: "Alpine Télémetrics", price: 204, code: 'telemetrics' },

            },
            comfort: {
                title: "Confort",
                declinaison: [
                    { name: "Rétroviseur intérieur électrochrome", price: 0, code: 0 },
                    { name: "Rétroviseurs ext. chauf. rabattables élec.", price: 504, code:1 },
                    { name: "Pack de rangement", price: 504, code:2 },
                    { name: "Régulateur / limiteur de vitesse", price: 0, code:3 },
                ],
            },
            drive: {
                title: "Conduite",
                parkAssist: [
                    { name: "Aide au stationnement AR", price: 420, code:'park1' },
                    { name: "Aide au stationnement AV et AR", price: 750, code:'park2' },
                    { name: "Aide au stationnement AV AR et caméra de recul", price: 1200, code:'park3' },
                ],
                muffler:{ name: "Echappement Sport actif", price: 1500, code: 'muffler' }
            },
            persoExt: {
                title: "Personnalisation extérieure",
                declinaison: [
                    { name: "Etriers de frein couleur Bleu Alpine", price: 384 },
                    { name: "Logo Alpine sur les ailes avant", price: 120 },
                    { name: "Etriers de frein couleur Gris Anthracite", price: 0 },
                ],
            },
            persoInt:{ 
                title: "Personnalisation interieure", 
                declinaison: [
                    { name: "Pédalier en aluminium", price: 120 },
                    { name: "Harmonie carbone mat", price: 0 },
                    { name: "Logo au centre du volant en Bleu Alpine", price: 84 },
                    { name: "Sièges chauffants", price: 400 },
                ],
            }
        },
        accessoires: {
            transportEtProtection: {
                title: "Transport et protection",
                declinaison: [
                    { name: 'Extincteur 1kg avec manomètre', price: 22 },
                    { name: 'Chaine à neige Premium Grip', price: 336 },
                    { name: 'Alarme', price: 543 },
                    { name: 'Protection Prise OBD', price: 99 },
                    { name: 'Kit de sécurité', price: 20 },
                    { name: 'Fixation extincteur', price: 72 },
                ],
            },
            mmultimedia: {
                title: "Multimedia",
                declinaison: [
                    { name: "Support caméra sport", price: 89 },
                    { name: "Support smartphone magnétique - Fixation sur tableau de bord", price: 21 },
                ],
            },
            interieur: {
                title: "Intérieur", declinaison: [
                    { name: "Tapis de coffre", price: 83 },
                    { name: "Filet de rangement - Horizontal", price: 59 },
                ]
            },
            materielDeGarage: {
                title: "Matériel de garage", declinaison: [
                    { name: "Chergeur de batterie", price: 240 },
                    { name: "Kit Outils Alpine", price: 398 },
                ]
            },
            exterieur: {
                title: "Extérieur", declinaison: [
                    { name: "Cabochons Alpine - Métalisés", price: 24 },
                    { name: "Housse de protection Alpine", price: 216 },
                    { name: "Antivols pour jante - Noirs", price: 51 },
                ]
            },
        }
    },
}


export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {}
})



export default optionsSlice.reducer;