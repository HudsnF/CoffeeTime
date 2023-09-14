'use client'

import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import Bebidas from "./Carrinho";

export default function Carrinho() {
    return (
        <div className="bg-coffee14 bg-no-repeat bg-cover bg-fixed">
            <NavBar />
            <Bebidas />
            <Footer/>
        </div>
    )
}