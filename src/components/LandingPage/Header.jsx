import React from 'react'
import logoWhite from '../../assets/images/landingpage/logo-white.png'

function Header() {
    return (
        <nav class="fixed w-full z-10 top-0 flex items-center justify-between flex-wrap bg-slate-900 p-6">
            <div class="flex items-center flex-no-shrink text-slate-100 mr-6">
                <img src={logoWhite} alt="logo Alpine blanc" />
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow flex gap-4">
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-red-600  uppercase">
                        Modèles
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-red-600  uppercase">
                        Formule 1
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-red-600 uppercase">
                        Univers Alpine
                    </a>
                </div>
                <div>
                    <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-slate-100 border-slate-100 hover:border-transparent hover:text-slate-900 hover:bg-slate-100 mt-4 lg:mt-0">Boutique Alpine</a>
                </div>
            </div>
        </nav>
    )
}

export default Header