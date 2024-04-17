import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    version: 'pure',
    price: 54700,
    color: { name: 'Peinture opaque Blanc Glacier', price: 0, code: 'white' },
    rims: { name: 'Standard', price: 0 },
    seddlery: { name: 'Sièges baquets en cuir noir et Dinamica', price: 0 },
    equipements: {
        design: [],
        mediaAndNavigation: [
            { name: 'système Audio standard', price: 0 },
        ],
        confort: [
            { name: 'Retroviseur intérieur électrochrome', price: 0 },
            { name: 'Régulateur / limiteur de vitesse', price: 0 },
        ],
        drive: [],
        persoExterieur: [
            { name: 'Etriers de frein couleur gris Anthracite', price: 0 },
        ],
        persoInterieur: [
            { name: 'Harmonie carbone mat', price: 0 },
        ]
    },
    accessoires: {
        transportEtProtection: [],
        mmultimedia: [],
        interieur: [],
        materielDeGarage: [],
        exterieur: [],
    }
}


export const selectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        changePrice: (state, action) => {
            // state.price = action.payload
        },
        changeSelectedPaint: (state, action) => {
            state.price -= state.color.price  //retour au prix d'avant choix option

        //modif option
            state.color = {
                name: action.payload.colorName,
                price: action.payload.colorPrice,
                code: action.payload.colorCode
            }

                state.price += action.payload.colorPrice //ajout du nouveau prix
        },
        changeVersion: (state) => {

            state.version = 'légende';
            state.price = 58500;
            state.seddlery = { name: 'Sièges Confort en cuir noir', price: 0 };

        }
    }
})


export const { changePrice, changeSelectedPaint, changeVersion } = selectionSlice.actions

export default selectionSlice.reducer;