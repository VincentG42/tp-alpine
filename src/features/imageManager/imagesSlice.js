import { createSlice } from "@reduxjs/toolkit";

//images selection option couleur
import selectWhite from '../../assets/images/color_selection/blanc.jpg'
import selectBlue from '../../assets/images/color_selection/bleu.jpg'
import selectBlack from '../../assets/images/color_selection/noir.jpg'

//images selection jantes
import standardRim from '../../assets/images/rimSelection/jante-standard.png'
import seracRim from '../../assets/images/rimSelection/jante-serac.png'
import legendeRim from '../../assets/images/rimSelection/jante-legende.png'

//images selection interieur
import selectBrownSeddlery from '../../assets/images/inside_selection/cuir-brun.jpg'
import selectBlackSeddlery from '../../assets/images/inside_selection/cuir-noir.jpg'
import selectDinamicaSeddlery from '../../assets/images/inside_selection/cuir-noir_dinamica.jpg'
import selectPerforatedSeddlery from '../../assets/images/inside_selection/cuir-noir_perfore.jpg'

//images vue  pure bleue
import bluePure1 from '../../assets/images/pureBlue/modele_pure-couleur_bleu-jante_standard (1).jpg'
import bluePure2 from '../../assets/images/pureBlue/modele_pure-couleur_bleu-jante_standard (2).jpg'
import bluePure3 from '../../assets/images/pureBlue/modele_pure-couleur_bleu-jante_standard (3).jpg'
import bluePure4 from '../../assets/images/pureBlue/modele_pure-couleur_bleu-jante_standard (4).jpg'

//images vue  legende bleue
import bluelegende1 from '../../assets/images/legendBlue/modele_legende-couleur_bleu-jante_legende-1.jpg'
import bluelegende2 from '../../assets/images/legendBlue/modele_legende-couleur_bleu-jante_legende-2.jpg'
import bluelegende3 from '../../assets/images/legendBlue/modele_legende-couleur_bleu-jante_legende-3.jpg'
import bluelegende4 from '../../assets/images/legendBlue/modele_legende-couleur_bleu-jante_legende-4.jpg'

//images vue jantes bleue
import blueRimStandard from '../../assets/images/blueRim/couleur-bleu_jante-standard (3).jpg'
import blueRimSerac from '../../assets/images/blueRim/couleur-bleu_jante-serac (3).jpg'
import blueRimLegende from '../../assets/images/blueRim/couleur-bleu_jante-legende (3).jpg'

//images vue  pure blanche
import whitePure1 from '../../assets/images/pureWhite/modele_pure-couleur_blanche-jante_standard (1).jpg'
import whitePure2 from '../../assets/images/pureWhite/modele_pure-couleur_blanche-jante_standard (2).jpg'
import whitePure3 from '../../assets/images/pureWhite/modele_pure-couleur_blanche-jante_standard (3).jpg'
import whitePure4 from '../../assets/images/pureWhite/modele_pure-couleur_blanche-jante_standard (4).jpg'

//images vue  legende blanche
import whitelegende1 from '../../assets/images/legendWhite/modele_legende-couleur_blanc-jante_legende-1.jpg'
import whitelegende2 from '../../assets/images/legendWhite/modele_legende-couleur_blanc-jante_legende-2.jpg'
import whitelegende3 from '../../assets/images/legendWhite/modele_legende-couleur_blanc-jante_legende-3.jpg'
import whitelegende4 from '../../assets/images/legendWhite/modele_legende-couleur_blanc-jante_legende-4.jpg'

//images vue jantes blanche
import whiteRimStandard from '../../assets/images/whiteRim/couleur-blanc_jante-standard (2).jpg'
import whiteRimSerac from '../../assets/images/whiteRim/couleur-blanc_jante-serac (2).jpg'
import whiteRimLegende from '../../assets/images/whiteRim/couleur-blanc_jante-legende (2).jpg'

//images vue  pure noire
import blackPure1 from '../../assets/images/pureBlack/modele_pure-couleur_noire-jante_standard (1).jpg'
import blackPure2 from '../../assets/images/pureBlack/modele_pure-couleur_noire-jante_standard (2).jpg'
import blackPure3 from '../../assets/images/pureBlack/modele_pure-couleur_noire-jante_standard (3).jpg'
import blackPure4 from '../../assets/images/pureBlack/modele_pure-couleur_noire-jante_standard (4).jpg'

//images vue  legende noire
import blacklegende1 from '../../assets/images/legendBlack/modele_legende-couleur_noir-jante_legende-1.jpg'
import blacklegende2 from '../../assets/images/legendBlack/modele_legende-couleur_noir-jante_legende-2.jpg'
import blacklegende3 from '../../assets/images/legendBlack/modele_legende-couleur_noir-jante_legende-3.jpg'
import blacklegende4 from '../../assets/images/legendBlack/modele_legende-couleur_noir-jante_legende-4.jpg'

//images vue jantes noire
import blackRimStandard from '../../assets/images/blackRim/couleur-noir_jante-legende (1).jpg'
import blackRimSerac from '../../assets/images/blackRim/couleur-noir_jante-serac (1).jpg'
import blackRimLegende from '../../assets/images/blackRim/couleur-noir_jante-legende (1).jpg'

//images vue  pure dinamica seddlery
import pureDinamica1 from '../../assets/images/inside_view/dinamica/cuir-noir_dinamica-1.jpg'
import pureDinamica2 from '../../assets/images/inside_view/dinamica/cuir-noir_dinamica-2.jpg'
import pureDinamica3 from '../../assets/images/inside_view/dinamica/cuir-noir_dinamica-3.jpg'

//images vue  pure perforated seddlery
import purePerforated1 from '../../assets/images/inside_view/perforated/cuir-noir_perfore-1.jpg'
import purePerforated2 from '../../assets/images/inside_view/perforated/cuir-noir_perfore-2.jpg'
import purePerforated3 from '../../assets/images/inside_view/perforated/cuir-noir_perfore-3.jpg'

//images vue  pure black seddlery
import legendBlackSeddlery1 from '../../assets/images/inside_view/black/cuir-noir-1.jpg'
import legendBlackSeddlery2 from '../../assets/images/inside_view/black/cuir-noir-2.jpg'
import legendBlackSeddlery3 from '../../assets/images/inside_view/black/cuir-noir-3.jpg'

//images vue  pure brown seddlery
import legendBrownSeddlery1 from '../../assets/images/inside_view/brown/cuir-brun-1.jpg'
import legendBrownSeddlery2 from '../../assets/images/inside_view/brown/cuir-brun-2.jpg'
import legendBrownSeddlery3 from '../../assets/images/inside_view/brown/cuir-brun-3.jpg'

//equipements
//selection
import drive from '../../assets/images/equipements/selection/conduite.jpg'
import comfort from '../../assets/images/equipements/selection/confort.jpg'
import design from '../../assets/images/equipements/selection/design.jpg'
import media from '../../assets/images/equipements/selection/media-nav.jpg'
import persoExt from '../../assets/images/equipements/selection/perso-ext.jpg'
import persoInt from '../../assets/images/equipements/selection/perso-int.jpg'
import security from '../../assets/images/equipements/selection/securite.jpg'










const initialState = {


    colorSelection: [
        { name: 'bleu', image: selectBlue, code: "blue" },
        { name: 'noir', image: selectBlack, code: "black" },
        { name: "blanc", image: selectWhite, code: "white" },

    ],
    rimsSelection: {
        pure: [
            { name: "standard", image: standardRim, code: "standard" },
            { name: "serac", image: seracRim, code: "serac" },
        ],

        legend: [
            { name: "standard", image: standardRim, code: "standard" },
            { name: "serac", image: seracRim, code: "serac" },
            { name: "legende", image: legendeRim, code: "legende" },
        ]

    },
    seddlerySelection: {
        pure: [
            { name: "dinamica", image: selectDinamicaSeddlery, code: "dinamica" },
            { name: "perforated", image: selectPerforatedSeddlery, code: "perforated" },
        ],
        legend: [
            { name: "black", image: selectBlackSeddlery, code: "black" },
            { name: "brown", image: selectBrownSeddlery, code: "brown" },
        ]
    },

    equipementsCategories: [
        { name: 'Conduite', image: drive },
        { name: 'Confort', image: comfort },
        { name: 'Design', image: design },
        { name: 'Média & Navigation', image: media },
        { name: 'Personnalisation extérieure', image: persoExt },
        { name: 'Personnalisation intérieure', image: persoInt },
        { name: 'Securité', image: security },
    ],

    pure: {
        name: 'pure',
        blue: {
            caroussel: [bluePure1, bluePure2, bluePure3, bluePure4],
            rims: [
                { name: "standard", image: blueRimStandard, code: 0 },
                { name: "serac", image: blueRimSerac, code: 1 }
            ],

        },
        white: {
            caroussel: [whitePure1, whitePure2, whitePure3, whitePure4],
            rims: [
                { name: "standard", image: whiteRimStandard, code: 0 },
                { name: "serac", image: whiteRimSerac, code: 1 }
            ]
        },
        black: {
            caroussel: [blackPure1, blackPure2, blackPure3, blackPure4],
            rims: [
                { name: "standard", image: blackRimStandard, code: 0 },
                { name: "serac", image: blackRimSerac, code: 1 },
            ]
        },
        seddlery: [
            [pureDinamica1, pureDinamica2, pureDinamica3],
            [purePerforated1, purePerforated2, purePerforated3]
        ],

    },

    legende: {
        name: 'legende',
        blue: {
            caroussel: [bluelegende1, bluelegende2, bluelegende3, bluelegende4],
            rims: [
                { name: "standard", image: blueRimStandard, code: 0 },
                { name: "serac", image: blueRimSerac, code: 1 },
                { name: "legende", image: blueRimLegende, code: 2 }
            ],

        },
        white: {
            caroussel: [whitelegende1, whitelegende2, whitelegende3, whitelegende4],
            rims: [
                { name: "standard", image: whiteRimStandard, code: 0 },
                { name: "serac", image: whiteRimSerac, code: 1 },
                { name: "legende", image: whiteRimLegende, code: 2 }
            ],
        },
        black: {
            caroussel: [blacklegende1, blacklegende2, blacklegende3, blacklegende4],
            rims: [{ name: "standard", image: blackRimStandard, code: 0 },
            { name: "serac", image: blackRimSerac, code: 1 },
            { name: "legende", image: blackRimLegende, code: 2 }],
        },
        seddlery: [
            [legendBlackSeddlery1, legendBlackSeddlery2, legendBlackSeddlery3],
            [legendBrownSeddlery1, legendBrownSeddlery2, legendBrownSeddlery3],
        ]
    }

}



export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {}
})


// export const { hitMonster, hitBack, heal, regenMana } = fightSlice.actions

export default imagesSlice.reducer;