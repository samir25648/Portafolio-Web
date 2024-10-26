import React from 'react';

const ButtonContact = (props) => {
    const { imgSrc, imgAlt, url } = props;

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center border hover:border-transparent border-black focus:outline-none hover:bg-gray-500 rounded-full text-base p-5"
        >
            {imgSrc && <img src={imgSrc} alt={imgAlt} className="w-8 h-8 md:w-8 md:h-8" />} 
        </a>
    );
}

export default ButtonContact;
