import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import HomeMax from "./HomeMax";
import HomeMin from "./HomeMin";


export default function Home() {
    return (
        <div className="bg-coffee3 bg-no-repeat bg-cover bg-center bg-fixed">
            <NavBar />
            <HomeMax/>
            <HomeMin/>
            <Footer/>
        </div>

    )
}