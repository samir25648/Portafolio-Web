import React from 'react';
import { motion } from 'framer-motion';

const imagenes = [
    { title: 'HTML', src: '/assets/images/html.png' },
    { title: 'CSS', src: '/assets/images/css.png' },
    { title: 'JavaScript', src: '/assets/images/js.png' },
    { title: 'React', src: '/assets/images/react.png' },
    { title: 'Tailwind', src: '/assets/images/tailwind.png' },
    { title: 'Figma', src: '/assets/images/figma.png' },
    { title: 'WordPress', src: '/assets/images/wordpress.png' },
];

const Habilidades = () => {
    return (
        <>
            <div id="habilidades" className='text-white font-serif text-5xl text-center mb-8'>
                <h1>Habilidades</h1>
            </div>

            <section className="text-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="p-8 bg-custom rounded-3xl shadow-lg overflow-hidden">
                        <motion.div
                            className="flex"
                            initial={{ x: 0 }}
                            animate={{ x: ['0%', '-50%'] }} 
                            transition={{
                                ease: "linear",
                                repeat: Infinity,
                                duration: 20, 
                            }}
                            style={{ display: 'flex', width: '400%' }}
                        >
                            {[...imagenes, ...imagenes].map((img, idx) => (
                                <div key={idx} className="flex flex-col items-center w-1/4 mx-8"> 
                                    <img
                                        alt={img.title}
                                        className="w-24 h-24 object-cover mb-4"
                                        src={img.src}
                                    />
                                    <h2 className="text-4xl font-serif text-center">{img.title}</h2>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Habilidades;
