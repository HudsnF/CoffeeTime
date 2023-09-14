import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import MenuMax from "./MenuMax";
import MenuMin from "./MenuMin";

export default function Menu() {
    return (
        <div className="bg-coffee2 bg-no-repeat bg-cover bg-top bg-fixed">
            <NavBar/>
            <MenuMax />
            <MenuMin />
            <Footer/>
        </div>
    )
}