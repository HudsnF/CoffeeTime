import Image from "next/image";
import Link from "next/link";

export default function NavBarMax() {
    return (
        <nav className="hidden sm:flex items-center justify-between bg-neutral-300 opacity-90 py-4 px-8 text-neutral-800 font-bold tracking-widest list-none">
            <div className="pl-4 bg-neutral-600 rounded-full shadow-md shadow-black hover:shadow-neutral-400 transition-all duration-200">
                <li className="mr-4 mb-4"><Link href="/home"><Image src={"/img/logo.png"} width={50} height={50} alt="logo image"/></Link></li>
            </div>
            <div className="flex items-center justify-end gap-10 w-3/4 text-center">
                <li className="text-red-800 hover:text-neutral-950 hover:underline transition-all duration-100"><Link href="/carrinho">FAÇA SEU PEDIDO AQUI</Link></li>
                <li className="hover:text-neutral-950 hover:underline transition-all duration-100"><Link href="/menu">Conheça nossas bebidas</Link></li>
                <li className="hover:text-neutral-950 hover:underline transition-all duration-100"><Link href="/sobre">Nossa história</Link></li>
            </div>
        </nav>
    )
}