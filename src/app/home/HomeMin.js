import Link from "next/link";
import Image from "next/image";

export default function HomeMin() {
    return (
        <div className="mb-10 sm:hidden">
            <section className="bg-coffee1 bg-no-repeat bg-cover bg-center py-28 px-6 opacity-95 border-t-2 border-black">
                <p className="text-black font-bold tracking-wider leading-tight text-2xl text-center">Experimente nosso <span className="text-white border-2 rounded border-red-950 py-0.5 px-1 shadow-sm shadow-red-800">CAFÉ</span> e tenha uma experiência inesquecível</p>
            </section>
            <section className="flex flex-col items-center bg-amber-50 mx-6 mt-10 opacity-90">
                <div className="w-full">
                    <Image src="/img/coffee6.jpg" width={100} height={100} alt="coffee image" layout="responsive" />
                </div>
                <div className="px-6 py-8 text-2xl font-bold text-center text-red-900 ">
                    <h2>Variedade de sabores</h2>
                    <p className="text-black text-base mt-2">Veja nossos sabores e escolha aquele que é sua cara!</p>
                    <button className="mt-4 text-base text-white tracking-widest shadow-md shadow-neutral-600 border-2 bg-gray-700 px-2 py-1 rounded-full hover:bg-neutral-700 hover:text-lg transition-all duration-200"><Link href="/menu">CONHEÇA</Link></button>
                </div>
            </section>
            <section className="flex flex-col items-center bg-amber-50 mx-6 mt-10 opacity-95">
                <div className="w-full">
                    <Image src="/img/coffee5.jpg" width={100} height={100} alt="coffee image" layout="responsive" />
                </div>
                <div className="px-6 py-8 text-2xl font-bold text-center text-red-900 ">
                    <h2>Faça seu pedido de qualquer lugar</h2>
                    <p className="text-black text-base mt-2">Através do app ou site, você pode pedir e receber em qualquer lugar!</p>
                    <button className="mt-4 text-base text-white tracking-widest shadow-md shadow-neutral-600 border-2 bg-gray-700 px-2 py-1 rounded-full hover:bg-neutral-700 hover:text-lg transition-all duration-200"><Link href="/carrinho">PEÇA AGORA</Link></button>
                </div>

            </section>

            <section className="flex flex-col items-center bg-amber-50 mx-6 mt-10 opacity-95">
                <div className="w-full">
                    <Image src="/img/coffee7.jpg" width={100} height={100} alt="coffee image" layout="responsive" />
                </div>
                <div className="px-6 py-8 text-2xl font-bold text-center text-red-900 ">
                    <h2>De onde viemos</h2>
                    <p className="text-black text-base mt-2">Conheça nossa história e como e feito sua bebida, além da origem dos grãos!</p>
                    <button className="mt-4 text-base text-white tracking-widest shadow-md shadow-neutral-600 border-2 bg-gray-700 px-2 py-1 rounded-full hover:bg-neutral-700 hover:text-lg transition-all duration-200"><Link href="/sobre">Saiba mais</Link></button>
                </div>
            </section>
        </div>
    )
}