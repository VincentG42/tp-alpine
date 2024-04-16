import { createSlice } from "@reduxjs/toolkit";

//images selection option couleur
import selectWhite from '../../assets/images/color_selection/blanc.jpg'
import selectBlue from '../../assets/images/color_selection/bleu.jpg'
import selectBlack from '../../assets/images/color_selection/noir.jpg'

//images selection jantes
import standardRim from '../../assets/images/rimSelection/jante-standard.jpg'
import seracRim from '../../assets/images/rimSelection/jante-serac.jpg'
import legendeRim from '../../assets/images/rimSelection/jante-legende.jpg'

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








const initialState = {


    colorSelection: [
        { name: 'bleu', image: selectBlue, code: "blue" },
        { name: 'noir', image: selectBlack, code: "black" },
        { name: "blanc", image: selectWhite, code: "white" },

    ],
    rimsSelection: {
        standard: { name: "standard", image: standardRim, code: "standard" },
        serac: { name: "serac", image: seracRim, code: "serac" },
        legende: { name: "legende", image: legendeRim, code: "legende" },

    },

    pure: {
        blue: {
            caroussel: [bluePure1, bluePure2, bluePure3, bluePure4],
            rims: [blueRimStandard, blueRimSerac],
        },
        white: {
            caroussel: [whitePure1, whitePure2, whitePure3, whitePure4],
            rims: [whiteRimStandard, whiteRimSerac]
        },
        black: {
            caroussel: [blackPure1, blackPure2, blackPure3, blackPure4],
            rims: [blackRimStandard, blackRimSerac]
        }

    },

    legende: {
        blue: {
            carrousel: [bluelegende1, bluelegende2, bluelegende3, bluelegende4],
            rims: [blueRimStandard, blueRimSerac, blueRimLegende],

        },
        white: {
            carrousel: [whitelegende1, whitelegende2, whitelegende3, whitelegende4],
            rims: [whiteRimStandard, whiteRimSerac, whiteRimLegende],
        },
        black: {
            carrousel: [blacklegende1, blacklegende2, blacklegende3, blacklegende4],
            rims: [blackRimStandard, blackRimSerac, blackRimLegende],
        }
    }


}


export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {}
})


// export const { hitMonster, hitBack, heal, regenMana } = fightSlice.actions

export default imagesSlice.reducer;