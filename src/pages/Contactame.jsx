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
                            <ButtonContact imgSrc="/src/assets/images/instagram.png" imgAlt="instagram" />
                            <ButtonContact imgSrc="/src/assets/images/whatsapp.png" imgAlt="whatsapp" />
                            <ButtonContact imgSrc="/src/assets/images/linkedin.png" imgAlt="linkedin" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contactame;
