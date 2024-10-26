import React from 'react';
import ButtonIcon from '../components/ButtonIcon';

const SobreMi = () => {
    return (
        <>
            <section className="text-white body-font">
                <div className="container px-5 py-24 mx-auto flex justify-center">
                    <div className="lg:w-1/2 p-12 bg-custom rounded-3xl shadow-lg">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-48 h-48 md:w-64 md:h-64 mb-8 object-cover object-center rounded-full inline-block"
                                src="/src/assets/images/img-pag.jpg"
                            />
                            <h2 className="text-white font-serif text-xl mb-5">SAMIR ALANYA</h2>
                            <h5 className="text-white font-serif title-font tracking-wider mb-5">Diseñador Web - Front-End</h5>
                            <p className="leading-relaxed font-serif mb-10 text-justify ">
                                Egresado de Diseño y Desarrollo de Software 🎓, especializado en interfaces de usuario atractivas y funcionales 🎨. Tengo conocimientos en Frontend 💻 y mi fortaleza principal es el diseño web. Busco mejorar mis habilidades en proyectos desafiantes y colaborativos 🤝.
                            </p>
                            <div className="flex justify-center ">
                                <ButtonIcon imgSrc="/src/assets/images/instagram.png" imgAlt="instagram" url="https://www.instagram.com/samir_alanya/"/>
                                <ButtonIcon imgSrc="/src/assets/images/github.png" imgAlt="github" url="https://github.com/samir25648"/>
                                <ButtonIcon imgSrc="/src/assets/images/linkedin.png" imgAlt="linkedin" url="https://www.linkedin.com/in/samir-brian-alanya-escobar/"/>
                                <ButtonIcon imgSrc="/src/assets/images/whatsapp.png" imgAlt="whatsapp" url="https://w.app/elmbcG"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SobreMi;
