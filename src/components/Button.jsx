import React from 'react'

const Button = (props) => {

    const { name, onClick } = props

    return (
        <button className="inline-flex items-center border hover:border-transparent border-black py-3 px-7 focus:outline-none hover:bg-gray-500 rounded-full text-base mt-4 md:mt-0" onClick={onClick}>{name}</button>
    )
}

export default Button