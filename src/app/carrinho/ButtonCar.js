import { RiShoppingBasket2Fill } from "react-icons/ri"
import Link from "next/link";

export default function ButtonCar(){
    return(
        <button className="bg-red-600 rounded-full p-1 hover:text-neutral-950 hover:underline transition-all duration-100 fixed right-2 bottom-8"><Link href="/carrinho"><RiShoppingBasket2Fill size={40} /></Link>
            <div className="absolute bg-red-500 rounded-full px-2 ml-1 text-white">0</div>
        </button>
    )
}