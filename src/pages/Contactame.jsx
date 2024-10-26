import React from 'react';
import ButtonContact from '../components/ButtonContact';

const Contactame = () => {
    return (
        <>
            <div className='text-white font-serif text-5xl text-center'>
                <h1>Contáctame</h1>
            </div>
            <section className="text-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="p-6 bg-custom rounded-3xl py-24 lg:px-24 md:px-12 sm:px-6">
                        <div className="flex justify-center flex-wrap space-x-4 sm:space-x-48"> 
                            <ButtonContact imgSrc="/assets/images/instagram.png" imgAlt="instagram" url="https://www.instagram.com/samir_alanya/"/>
                            <ButtonContact imgSrc="/assets/images/whatsapp.png" imgAlt="whatsapp" url = "https://w.app/elmbcG"/>
                            <ButtonContact imgSrc="/assets/images/linkedin.png" imgAlt="linkedin" url = "https://www.linkedin.com/in/samir-brian-alanya-escobar/"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contactame;
