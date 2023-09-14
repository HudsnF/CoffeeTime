import React from "react";

export default function ScrollToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={scrollToTop} className="w-full bg-gray-700 hover:bg-gray-600 p-4 text-white text-sm">
            Voltar ao início
        </button>
    );
}