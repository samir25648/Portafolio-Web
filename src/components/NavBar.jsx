import React, { useState } from 'react';
import Button from './Button';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Función para descargar el curriculum
    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf'; 
        link.download = 'CV-SAMIR-ALANYA.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Función para manejar el desplazamiento
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="relative text-white font-serif bg-custom">
            <div className="container mx-auto flex justify-between items-center p-5">
                <a className="title-font font-medium text-white text-xl">
                    SAMIR ALANYA
                </a>

                <nav className="hidden lg:flex lg:items-center lg:space-x-10 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <button onClick={() => scrollToSection('habilidades')} className="text-lg font-serif">
                        HABILIDADES
                    </button>
                    <button onClick={() => scrollToSection('proyectos')} className="text-lg font-serif">
                        PROYECTOS
                    </button>

                </nav>

                <div className="hidden lg:block">
                    <Button name='CURRICULUM' onClick={downloadPDF} />
                </div>
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-white focus:outline-none"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="bg-custom p-5 lg:hidden">
                    <div className="flex flex-col items-center">
                        <button onClick={() => scrollToSection('habilidades')} className="text-lg font-serif">HABILIDADES</button>
                        <button onClick={() => scrollToSection('proyectos')} className="text-lg font-serif">PROYECTOS</button>
                        <Button name='CURRICULUM' onClick={downloadPDF} />
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
