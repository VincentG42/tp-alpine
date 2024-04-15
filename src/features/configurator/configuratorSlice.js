import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    version:[
        {name: 'Pure', price: 54700},
        { name: 'legende', price: 58500}
    ],
    couleur:[

        { name: "Teinte spéciale Bleu Alpine", price: 1800},
        { name: "Teinte métallisée Noir Profond", price: 840 },
        {name: "Peinture opaque Blanc Glacier", price: 0}        
    ],
    jantes :[
        {name:'Standard', price : 0 , isLegende: false},
        {name: 'Serac' , price : 1000 , isLegende:false},
    ],
    scellerie: [
        {name: 'Sièges baquets en cuir noir et Dinamica', price: 0, isLegende: false},
        {name: 'Sièges Confort en cuir noir perforé', price: 800, isLegende: false},
        {name: 'Sièges Confort en cuir noir', price: 0, isLegende: true},
        {name: 'Sièges Confort en cuir brun', price: 800, isLegende: true}
    ],
    equipements: {
        design:[
            {name:'Pack héritage', price: 180},
            {name: 'Repose-pieds ^passager en aluminium', price: 96}
        ],
        mediaAndNavigation: [
            {name: "Alpine Télémetrics", price :204},
            {name: "Système Audio Focal", price: 600},
            {name: "Système Audio Focal Premium", price: 1200},
            {name: "Système Audio standard", price: 0},
        ],
        confort :[
            {name: "Rétroviseur intérieur électrochrome", price: 0},
            {name: "Rétroviseurs ext. chauf. rabattables élec.", price: 504},
            {name: "Pack de rangement", price: 504},
            {name: "Régulateur / limiteur de vitesse", price: 0},
        ],
        conduite :[
            {name: "Aide au stationnement AR", price: 420},
            {name: "Aide au stationnement AV et AR", price: 750},
            {name: "Aide au stationnement AV AR et caméra de recul", price: 1200},
            {name: "Echappement Sport actif", price: 1500},
        ],
        securite :[
            {name: "Système de freinage Haute-Perf 320mm", price: 1000},
            {name: "Assistance au freinage d'urgence", price: 0},
            {name: "Airbags frontaux conducteur et passager", price: 0},
        ],
        persoExterieur :[
            {name: "Etriers de frein couleur Bleu Alpine", price: 384},
            {name: "Logo Alpine sur les ailes avant", price: 120},
            {name: "Etriers de frein couleur Gris Anthracite", price: 0},
        ],
        persoInterieur :[
            {name: "Pédalier en aluminium", price: 120},
            {name: "Harmonie carbone mat", price: 0},
            {name: "Logo au centre du volant en Bleu Alpine", price: 84},
            {name: "Sièges chauffants", price: 400},
        ],
    },
    accessoires: {
        transportEtProtection:[
            {name:'Extincteur 1kg avec manomètre', price: 22},
            {name: 'Chaine à neige Premium Grip', price: 336},
            {name:'Alarme', price: 543},
            {name: 'Protection Prise OBD', price: 99},
            {name:'Kit de sécurité', price: 20},
            {name: 'Fixation extincteur', price: 72},
        ],
        mmultimedia: [
            {name: "Support caméra sport", price :89},
            {name: "Support smartphone magnétique - Fixation sur tableau de bord", price: 21},
        ],
        interieur :[
            {name: "Tapis de coffre", price: 83},
            {name: "Filet de rangement - Horizontal", price: 59},
        ],
        materielDeGarage :[
            {name: "Chergeur de batterie", price: 240},
            {name: "Kit Outils Alpine", price: 398},
        ],
        exterieur :[
            {name: "Cabochons Alpine - Métalisés", price: 24},
            {name: "Housse de protection Alpine", price: 216},
            {name: "Antivols pour jante - Noirs", price: 51},
        ],


    }
}


export const configuratorSlice = createSlice({
    name : 'config',
    initialState,
    reducers : {}
})


// export const { hitMonster, hitBack, heal, regenMana } = fightSlice.actions

export default configuratorSlice.reducer;