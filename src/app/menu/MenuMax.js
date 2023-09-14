import Image from "next/image";
import Link from "next/link";
import { BiDownArrowAlt } from "react-icons/bi"
import { GiCoffeeCup } from "react-icons/gi"

export default function MenuMax() {
    return (
        <div className="hidden md:block mt-10 mb-10">
            <section className="flex bg-amber-50 opacity-90 mb-8 mx-6">
                <div className="w-3/5">
                    <Image src={"/img/coffee6.jpg"} width={100} height={100} alt="coffee image" layout="responsive" />
                </div>
                <div className="w-2/5 flex flex-col items-center justify-center text-4xl font-bold text-red-950 gap-8">
                    <h1 className="border-2 border-red-900 p-2 shadow-sm shadow-black">CARDÁPIO</h1>
                    <BiDownArrowAlt size={80} />
                </div>
            </section>
            <section className="bg-amber-50 opacity-90 flex mb-8 mx-6">
                <div className="w-2/4">
                    <Image src={"/img/coffee9.png"} width={100} height={100} alt="coffee image" layout="responsive" />
                </div>
                <div className="w-2/4 flex items-center justify-center border-l-2 border-dotted border-neutral-600 my-4 px-10">
                    <div className="flex flex-col items-center justify-center gap-4 text-lg p-8 border-2 border-neutral-400 px-10">
                        <h1 className="text-2xl font-bold underline">ESPRESSO</h1>
                        <p className="text-sm text-center">A dose de intensidade que desperta os sentidos em um único gole.</p>
                        <div className="flex items-center gap-2">
                            <GiCoffeeCup size={30} />
                            <p>50ml</p>
                            <GiCoffeeCup size={30} />
                            <p>90ml</p>
                        </div>
                        <p className="text-sm text-red-950">6,95R$ - 7,95R$</p>
                        <button className="bg-neutral-200 border-2 border-neutral-400 shadow-sm shadow-neutral-900 hover:bg-neutral-300 transition-all duration-200 px-2 rounded-full text-base"><Link href="/carrinho">Faça seu pedido!</Link></button>
                    </div>
                </div>
            </section>

            <section className="bg-amber-50 opacity-90 flex mb-8 mx-6">
                <div className="w-2/4 flex items-center justify-center border-r-2 border-dotted border-amber-600 my-4 px-10">
                    <div className="flex flex-col items-center justify-center gap-4 text-lg p-8 border-2 border-amber-900">
                        <h1 className="text-2xl font-bold underline text-amber-600">CAPPUCCINO</h1>
                        <p className="text-center text-sm">A harmonia perfeita entre café, leite e espuma que aquece o corpo e acalma a alma.</p>
                        <div className="flex flex-wrap items-center gap-2">
                            <GiCoffeeCup size={30} />
                            <p>400ml</p>
                            <GiCoffeeCup size={30} />
                            <p>500ml</p>
                            <GiCoffeeCup size={30} />
                            <p>600ml</p>
                        </div>
                        <p className="text-sm text-red-950">10,95R$ - 11,95R$ - 12,95R$</p>
                        <button className="bg-neutral-200 border-2 border-neutral-400 shadow-sm shadow-neutral-900 hover:bg-neutral-300 transition-all duration-200 px-2 rounded-full text-base"><Link href="/carrinho">Faça seu pedido!</Link></button>
                    </div>
                </div>
                <div className="w-2/4">
                    <Image src={"/img/coffee4.png"} width={100} height={100} alt="coffee image" layout="responsive" />
                </div>
            </section>

            <section className="bg-amber-50 opacity-90 flex mb-8 mx-6">
                <div className="w-2/4">
                    <Image src={"/img/coffee10.png"} width={100} height={100} alt="coffee image" layout="responsive" />
                </div>
                <div className="w-2/4 flex items-center justify-center border-l-2 border-dotted border-neutral-600 my-4 px-10">
                    <div className="flex flex-col items-center justify-center gap-4 text-lg p-8 border-2 border-amber-950 px-10">
                        <h1 className="text-2xl font-bold underline text-gray-700">Caffè latte</h1>
                        <p className="text-sm text-center">A dança suave entre o café e o leite, criando uma sinfonia de sabor e cremosidade.</p>
                        <div className="flex items-center gap-2">
                            <GiCoffeeCup size={30} />
                            <p>400ml</p>
                            <GiCoffeeCup size={30} />
                            <p>500ml</p>
                        </div>
                        <p className="text-sm text-red-950">8,95R$ - 9,95R$</p>
                        <button className="bg-neutral-200 border-2 border-neutral-400 shadow-sm shadow-neutral-900 hover:bg-neutral-300 transition-all duration-200 px-2 rounded-full text-base"><Link href="/carrinho">Faça seu pedido!</Link></button>
                    </div>
                </div>
            </section>

            <section className="bg-amber-50 opacity-90 flex mb-8 mx-6">
                <div className="w-2/4 flex items-center justify-center border-r-2 border-dotted border-green-600 my-4 px-10">
                    <div className="flex flex-col items-center justify-center gap-4 text-lg p-8 border-2 border-green-950">
                        <h1 className="text-2xl font-bold underline text-green-900">CHÁ</h1>
                        <p className="text-center text-sm">Uma xícara de serenidade em meio ao caos, uma pausa para a alma em cada infusão.</p>
                        <div className="flex items-center gap-2">
                            <GiCoffeeCup size={30} />
                            <p>400ml</p>
                            <GiCoffeeCup size={30} />
                            <p>500ml</p>
                        </div>
                        <p className="text-sm text-red-950">9,95R$ - 10,95R$</p>
                        <button className="bg-neutral-200 border-2 border-neutral-400 shadow-sm shadow-neutral-900 hover:bg-neutral-300 transition-all duration-200 px-2 rounded-full text-base"><Link href="/carrinho">Faça seu pedido!</Link></button>
                    </div>
                </div>
                <div className="w-2/4">
                    <Image src={"/img/coffee11.png"} width={100} height={100} alt="coffee image" layout="responsive" />
                </div>
            </section>

            <section className="bg-amber-50 opacity-90 flex mb-8 mx-6">
                <div className="w-2/4">
                    <Image src={"/img/coffee13.jpg"} width={100} height={100} alt="coffee image" layout="responsive" />
                </div>
                <div className="w-2/4 flex items-center justify-center border-l-2 border-dotted border-green-600 my-4 px-10">
                    <div className="flex flex-col items-center justify-center gap-4 text-lg p-8 border-2 border-green-950 px-10">
                        <h1 className="text-2xl font-bold underline text-green-900">Green Tea</h1>
                        <p className="text-sm text-center">Uma lufada revigorante de saúde em cada folha, uma viagem para o bem-estar a cada gole.</p>
                        <div className="flex items-center gap-2">
                            <GiCoffeeCup size={30} />
                            <p>400ml</p>
                            <GiCoffeeCup size={30} />
                            <p>500ml</p>
                        </div>
                        <p className="text-sm text-red-950">8,95R$ - 9,95R$</p>
                        <button className="bg-neutral-200 border-2 border-neutral-400 shadow-sm shadow-neutral-900 hover:bg-neutral-300 transition-all duration-200 px-2 rounded-full text-base"><Link href="/carrinho">Faça seu pedido!</Link></button>
                    </div>
                </div>
            </section>

            <section className="bg-amber-50 opacity-90 flex mb-8 mx-6">
                <div className="w-2/4 flex items-center justify-center border-r-2 border-dotted border-green-700 my-4 px-10">
                    <div className="flex flex-col items-center justify-center gap-4 text-lg p-8 border-2 border-green-900">
                        <h1 className="text-2xl font-bold underline text-green-900">Mint Tea</h1>
                        <p className="text-center text-sm">A frescura da natureza em uma xícara, um abraço refrescante para a mente e o paladar.</p>
                        <div className="flex items-center gap-2">
                            <GiCoffeeCup size={30} />
                            <p>400ml</p>
                            <GiCoffeeCup size={30} />
                            <p>500ml</p>
                        </div>
                        <p className="text-sm text-red-950">9,95R$ - 10,95R$</p>
                        <button className="bg-neutral-200 border-2 border-neutral-400 shadow-sm shadow-neutral-900 hover:bg-neutral-300 transition-all duration-200 px-2 rounded-full text-base"><Link href="/carrinho">Faça seu pedido!</Link></button>
                    </div>
                </div>
                <div className="w-2/4">
                    <Image src={"/img/coffee12.jpg"} width={100} height={100} alt="coffee image" layout="responsive" />
                </div>
            </section>

        </div>
    )
}