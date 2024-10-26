import React from 'react';

const ButtonIcon = (props) => {
    const { imgSrc, imgAlt, title, url } = props;

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center border hover:border-transparent border-black py-2 px-2 
            focus:outline-none hover:bg-gray-500 rounded-full text-sm mt-2 ms-3 mb-2 lg:ms-8"
        >
            {imgSrc && <img src={imgSrc} alt={imgAlt} className="w-6 h-6" />}
            {title && <span className="text-white px-2 text-xs">{title}</span>}
        </a>
    );
}

export default ButtonIcon;
