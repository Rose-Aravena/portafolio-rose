import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import rlogo from '../assets/R.svg'

const NavBar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Inicio',
        },
        {
            id: 2,
            link: 'Sobre mí',
        },
        {
            id: 3,
            link: 'Proyectos',
        },
        {
            id: 4,
            link: 'skills',
        },
        {
            id: 5,
            link: 'Contacto',
        },
    ];

    return (
        <div className="flex justify-between items-center w-screen h-20 px-4 text-white bg-teal fixed">
            <div>
                <a className="flex items-center">
                    <img src={rlogo} width={110} height={35} alt="Logo Rose"/>
                </a>
            </div>
            <ul className="hidden md:flex">
                {links.map(link => (
                    <li
                        key={link.id}
                        className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-white duration-200"
                    >
                        <Link to={link.link} smooth duration={500}>
                            {link.link}
                        </Link>
                    </li>
                ))}
            </ul>
            <div
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {hamburgerMenu ? <FaTimes size={30} /> : <FaBars sise={30} />}
            </div>
            {hamburgerMenu && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
                    {links.map(link => (
                        <li
                            key={link.id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setHamburgerMenu(!hamburgerMenu)} to={link.link} smooth duration={500}>
                                {link.link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;