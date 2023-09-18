import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";


export default function Sobre() {
    return (
        <div className="bg-coffee8 bg-no-repeat bg-cover bg-fixed bg-top">
            <NavBar />
            <div className="bg-neutral-300 opacity-90 flex flex-col items-center mx-6 my-6 p-6 text-center rounded-lg">
                <p>Olá!</p>
                <p>Eu sou</p>
                <p className="font-semibold mb-2">Hudson Faria E. Santo</p>
                <p>
                    Sou desenvolvedor Web Front-end, estudante de Análise e Desenvolvimento de Sistemas e procuro oportunidade de estágio ou desenvolvedor Front-end Jr. Possuo habilidades com HTML, CSS, Javascript, React, NextJs e TailwindCss e, estou em constante aprimoramento, sempre estudando novas tecnologias! Tenho disponibilidade e aptidão para aprender coisas novas sempre que necessário, além de alta capacidade de adaptação.
                </p>
            </div>
            <Footer />
        </div>
    )
}