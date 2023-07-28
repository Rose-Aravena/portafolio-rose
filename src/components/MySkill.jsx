import React from 'react'
import html from "../assets/mySkill/html.png";
import css from "../assets/mySkill/css.png";
import javascript from "../assets/mySkill/javascript.png";
import react from "../assets/mySkill/react.png";
import node from "../assets/mySkill/node.png";
import python from "../assets/mySkill/python.png";
import tailwind from "../assets/mySkill/tailwind.png";
import vite from "../assets/mySkill/vite.png";
import firebase from "../assets/mySkill/firebase.png";
import git from "../assets/mySkill/git.png";
import figma from "../assets/mySkill/figma.png";






export const MySkill = () => {
    const tecnologiasData = [
        {
            id: 1,
            nombre: "HTML",
            imagen: html,
        },
        {
            id: 2,
            nombre: "CSS",
            imagen: css,
        },
        {
            id: 3,
            nombre: "JavaScript",
            imagen: javascript,
        },
        {
            id: 4,
            nombre: "React",
            imagen: react,
        },
        {
            id: 5,
            nombre: "Nodejs",
            imagen: node,
        },
        {
            id: 6,
            nombre: "Python",
            imagen: python,
        },
        {
            id: 7,
            nombre: "Tailwind CSS",
            imagen: tailwind,
        },
        {
            id: 8,
            nombre: "Vite",
            imagen: vite,
        },
        {
            id: 9,
            nombre: "Firebase",
            imagen: firebase,
        },
        {
            id: 10,
            nombre: "Git",
            imagen: git,
        },
        {
            id: 11,
            nombre: "Figma",
            imagen: figma,
        }
    ];

    return (
        <div name="skills" className="max-w-screen-xl h-full mb-40 mt-80 mx-auto md:w-5/6 lg:w-4/6 bg-oscuro text-white">
            <h2 className="inline text-4xl font-bold border-b-4 border-teal">Habilidades</h2>
            <div className="grid place-content-center md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3 mb-16 md:mx-0 mx-3 pt-10">
                {tecnologiasData.map(tecnologia => (
                    <div key={tecnologia.id} className="flex items-center rounded-lg px-5 py-3 space-x-4 transition hover:-translate-y-1 hover:scale-105 hover:bg-grisoscuro duration-300">
                        <img className="w-10 h-10" src={tecnologia.imagen} alt={`imagen de logo ${tecnologia.nombre}`} />
                        <div className="font-medium dark:text-black">
                            <p className='text-texto'>{tecnologia.nombre}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
