'use client'

import { BsLinkedin, BsGithub } from "react-icons/bs"
import { FaFolderOpen } from "react-icons/fa"
import ScrollToTopButton from "./ScrollToTopButton"

export default function Footer() {
    return (
        <footer className="bg-neutral-300 opacity-80 py-20 px-6 flex flex-col items-center gap-8 mx-6">
            <div className="text-center leading-8 text-">
                <h3>Website made with academic purpose and no commercial intention!</h3>
                <p>© Copyright of the images belong to <a href="https://pixabay.com/" target="_blank" className="text-red-500 hover:underline">Pixabay website</a>.</p>
            </div>
            <div className="flex gap-8">
                <a href="https://portfolio-hudsnf.vercel.app/contacts" target="_blank"><FaFolderOpen size={40} className="hover:text-neutral-600 transition-all duration-300"/> </a>
                <a href="https://github.com/HudsnF" target="_blank"><BsGithub size={40} className="hover:text-neutral-600 transition-all duration-300"/> </a>
                <a href="https://www.linkedin.com/in/hudsonsanto/" target="_blank"><BsLinkedin size={40} className="hover:text-neutral-600 transition-all duration-300"/></a>
            </div>
            <ScrollToTopButton/>
        </footer>
    )
}