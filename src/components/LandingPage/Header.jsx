import React from 'react'


function Header() {
    return (
        <nav className="lg:fixed w-full z-10 top-0 flex items-center justify-between flex-wrap bg-slate-900 px-6 py-2">
            <div className="flex items-center flex-no-shrink text-slate-100 mr-6">
                {/* <img src={logoWhite} alt="logo Alpine blanc" /> */}

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{ enableBackground: 'new 0 0 591.8 193.5', width: '15em' }} viewBox="0 0 591.8 193.5">
                        <path d="M100.2 93.4h14.6L71.5 46 28.2 93.4h14.6l7.7-8.7h41.9l7.8 8.7zM71.5 61.1l13.6 15.3H58l13.5-15.3zm168.1-5.4h37.6c7.5 0 9.8 2.3 9.8 7.1 0 4.3-3.2 6.9-9.7 6.9h-37.7v-14zm105.7-8.2h-12.4v45.9h12.4V47.5zm103.1 0v28.3l-51.3-28.3h-12.5v45.9h11.5V59.5L460 94.7V47.5h-11.6zm-221.1 0v45.9h12.4V78h40c14.9 0 20.6-6.2 20.6-15.5 0-8.9-6.3-15.1-20.1-15.1h-52.9zm-73.4 37.6V47.5h-12.4v45.9h56.3l3.5-8.3h-47.4zm357.8 0V74.2H562v-8.3h-50.3V55.7H562v-8.3h-62.7v45.9h62l2.3-8.3h-51.9z" style={{ fill: '#fff' }}></path>
                        <path d="m230.3 139.2-10.4 8.3h55l10.5-8.3z" style={{ fill: '#0078c9' }}></path>
                        <path d="m285.4 139.2-10.5 8.3h26.7l10.5-8.3z" style={{ fill: '#feffff' }} ></path>
                        <path d="m312.1 139.2-10.5 8.3h59.7l10.5-8.3z" style={{ fill: '#da291c' }}></path>
                    </svg>
                </div>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow flex gap-4">
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:underline underline-offset-2 decoration-red-600 uppercase">
                        Modèles
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:underline underline-offset-2 decoration-red-600 uppercase">
                        Formule 1
                    </a>
                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:underline underline-offset-2 decoration-red-600 uppercase">
                        Univers Alpine
                    </a>
                </div>
                <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-slate-100 border-slate-100 hover:border-transparent hover:text-slate-900 hover:bg-slate-100 mt-4 lg:mt-0">Boutique Alpine</a>
                </div>
            </div>
        </nav>
    )
}

export default Header