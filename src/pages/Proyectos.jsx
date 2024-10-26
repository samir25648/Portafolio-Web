import React from 'react';
import ButtonIcon from '../components/ButtonIcon';

const proyectos = [
  {
    title: 'Portafolio Web Personal',
    img: '/src/assets/images/proyecto-1.png',
    description: 'Desarrollé un portafolio que destaca las tecnologías que domino, utilizando Tailwind CSS para crear una interfaz moderna y responsiva. Este proyecto refleja mi enfoque en la calidad y la innovación en el diseño web.',
    techIcons: ['/src/assets/images/react.png', '/src/assets/images/tailwind.png'],
  },
  {
    title: 'Portafolio Web Personal',
    img: '/src/assets/images/proyecto-1.png',
    description: 'Desarrollé un portafolio que destaca las tecnologías que domino, utilizando Tailwind CSS para crear una interfaz moderna y responsiva. Este proyecto refleja mi enfoque en la calidad y la innovación en el diseño web.',
    techIcons: ['/src/assets/images/react.png', '/src/assets/images/tailwind.png'],
  },
  {
    title: 'Portafolio Web Personal',
    img: '/src/assets/images/proyecto-1.png',
    description: 'Desarrollé un portafolio que destaca las tecnologías que domino, utilizando Tailwind CSS para crear una interfaz moderna y responsiva. Este proyecto refleja mi enfoque en la calidad y la innovación en el diseño web.',
    techIcons: ['/src/assets/images/react.png', '/src/assets/images/tailwind.png'],
  },
  {
    title: 'Portafolio Web Personal',
    img: '/src/assets/images/proyecto-1.png',
    description: 'Desarrollé un portafolio que destaca las tecnologías que domino, utilizando Tailwind CSS para crear una interfaz moderna y responsiva. Este proyecto refleja mi enfoque en la calidad y la innovación en el diseño web.',
    techIcons: ['/src/assets/images/react.png', '/src/assets/images/tailwind.png'],
  },
];

const Proyectos = () => {
  return (
    <>
      <div id= "proyectos" className='text-white font-serif text-5xl text-center'>
        <h1>Proyectos</h1>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {proyectos.map((proyecto, index) => (
              <div key={index} className="p-6 md:p-4 lg:px-24 w-full sm:w-1/2 md:w-1/2 mb-6 ">
                <div className="rounded-2xl p-6 bg-custom ">
                  <div className="rounded-xl h-max overflow-hidden mb-6 ">
                    <img alt="content" className="object-cover object-center h-full w-full " src={proyecto.img} />
                  </div>
                  <h2 className="text-xl title-font text-white mt-5 font-serif text-center mb-6">{proyecto.title}</h2>
                  <p className="text-white leading-relaxed mt-2 text-center font-serif mb-8">{proyecto.description}</p>
                  
                  <div className="flex justify-center mb-8">
                    {proyecto.techIcons.map((src, idx) => (
                      <img
                        key={idx}
                        alt={`Tecnología ${idx + 1}`}
                        className="w-8 h-8 object-cover mx-2" 
                        src={src}
                      />
                    ))}
                  </div>

                  <div className='flex justify-center'>
                    <ButtonIcon imgSrc="/src/assets/images/github-black.png" imgAlt="github-black" title="Código" className="mr-2" /> 
                    <ButtonIcon imgSrc="/src/assets/images/enlace.png" imgAlt="enlace" title="Demo" className="ml-2" /> 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Proyectos;
