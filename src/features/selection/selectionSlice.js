import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    version: 'pure',
    price: 54700,
    color: { name: 'Peinture opaque Blanc Glacier', price: 0, code: 'white' },
    rims: { name: 'Standard', price: 0, code: 0 },
    seddlery: { name: 'Sièges baquets en cuir noir et Dinamica', price: 0 },
    equipements: {
        design: [],
        mediaAndNavigation: {
            audio: { name: 'système Audio standard', price: 0 },
            telemetrics: null
        },
        confort: [
            { name: 'Retroviseur intérieur électrochrome', price: 0 },
            { name: 'Régulateur / limiteur de vitesse', price: 0 },
        ],
        drive: {
            park: null,
            muffler: null,
        },
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
        changeSelectedAudio: (state, action) => {
            state.equipements.mediaAndNavigation.audio &&
                (state.price -= state.equipements.mediaAndNavigation.audio.price)

            state.equipements.mediaAndNavigation.audio = { name: action.payload.audioName, price: action.payload.audioPrice, code: action.payload.audioCode }

            state.price += action.payload.audioPrice

        },
        changeTelemetrics: (state, action) => {
            if (state.equipements.mediaAndNavigation.telemetrics === null) {

                state.equipements.mediaAndNavigation.telemetrics = { name: action.payload.telemetricsName, price: action.payload.telemetricsPrice }
                state.price += action.payload.telemetricsPrice
            } else {
                (state.price -= state.equipements.mediaAndNavigation.telemetrics.price)
                state.equipements.mediaAndNavigation.telemetrics = null
            }
        },

        changeDesignOptions: (state, action) => {

            const currentOptions = state.equipements.design.find(option => option.code === action.payload.designCode)

            if (currentOptions) {
                const filteredArray = state.equipements.design.filter(option => option.code !== action.payload.designCode)
                state.equipements.design = filteredArray
                state.price -= action.payload.designPrice
            } else {
                state.equipements.design.push({ name: action.payload.designName, price: action.payload.designPrice, code: action.payload.designCode })
                state.price += action.payload.designPrice
            }
        },

        changeComfortOPtions: (state, action) => {

            const currentOptions = state.equipements.confort.find(option => option.code === action.payload.comfortCode)
            if (currentOptions) {
                const filteredArray = state.equipements.confort.filter(option => option.code !== action.payload.comfortCode)
                state.equipements.confort = filteredArray
                state.price -= action.payload.comfortPrice
            } else {
                state.equipements.confort.push({ name: action.payload.comfortName, price: action.payload.comfortPrice, code: action.payload.comfortCode })
                state.price += action.payload.comfortPrice
            }

        },

        changeSelectedAssist: (state, action) => {
            state.equipements.drive.park &&
                (state.price -= state.equipements.drive.park.price)

            state.equipements.drive.park = { name: action.payload.assistName, price: action.payload.assistPrice, code: action.payload.assistCode }

            state.price += action.payload.assistPrice

        },

        changeMuffler: (state, action) => {
            if (state.equipements.drive.muffler === null) {

                state.equipements.drive.muffler = { name: action.payload.mufflerName, price: action.payload.mufflerPrice }

                state.price += action.payload.mufflerPrice
            } else {
                (state.price -= state.equipements.drive.muffler.price)
                state.equipements.drive.muffler = null
            }
        },

        changeSelectedSeddlery: (state, action) => {
            state.price -= state.seddlery.price

            state.seddlery = {
                name: action.payload.seddleryName,
                price: action.payload.seddleryPrice,
            }
            state.price += action.payload.seddleryPrice

        },
        changedSelectedRim: (state, action) => {
            state.price -= state.rims.price

            state.rims = {
                name: action.payload.rimName,
                price: action.payload.rimPrice,
                code: action.payload.rimCode
            }

            state.price += action.payload.rimPrice
        },

        changeSelectedPaint: (state, action) => {
            state.price -= state.color.price  //retour au prix d'avant choix option

            //modif color
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


export const { changeSelectedAudio, changeTelemetrics, changeDesignOptions, changeComfortOPtions, changeMuffler, changeSelectedSeddlery, changedSelectedRim, changeSelectedPaint, changeVersion, changeSelectedAssist } = selectionSlice.actions

export default selectionSlice.reducer;