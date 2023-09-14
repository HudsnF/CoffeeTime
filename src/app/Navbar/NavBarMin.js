'use client'

import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import Image from "next/image";
import Link from "next/link";


export default function NavBarMin() {

    const [navbar, setNavbar] = useState(false);

    return (
        <div className="sm:hidden">
            <nav className="flex items-center justify-between opacity-90 pt-4 mb-2 px-8 text-neutral-800 font-bold tracking-widest list-none">
                <div className="pl-4 bg-neutral-600 rounded-full shadow-md shadow-black hover:shadow-neutral-400 transition-all duration-200">
                    <li className="mr-4 mb-4 pb-1"><Link href="/home"><Image src={"/img/logo.png"} width={36} height={36} alt="logo image"/></Link></li>
                </div>

                <button className="bg-neutral-200 p-2 rounded opacity-80"
                    onClick={() => setNavbar(!navbar)}
                >{navbar ? (
                    <AiOutlineClose size={40} />
                ) : (<GiHamburgerMenu size={40} />)}
                </button>

            </nav>
            <div className={`sm:flex flex-col items-center py-8 gap-8 ${navbar ? 'flex' : 'hidden'} list-none font-bold`}>
                <li className="bg-neutral-400 px-4 py-1 rounded-full shadow-md shadow-neutral-600 text-red-800 hover:text-neutral-950 hover:underline transition-all duration-100"><Link href="/carrinho">FAÇA SEU PEDIDO AQUI</Link></li>
                <li className="bg-neutral-400 px-4 py-1 rounded-full shadow-md shadow-neutral-600 hover:text-neutral-950 hover:underline transition-all duration-100"><Link href="/menu">Conheça nossas bebidas</Link></li>
                <li className="bg-neutral-400 px-4 py-1 rounded-full shadow-md shadow-neutral-600 hover:text-neutral-950 hover:underline transition-all duration-100"><Link href="/sobre">Nossa história</Link></li>
            </div>
        </div>
    )
}