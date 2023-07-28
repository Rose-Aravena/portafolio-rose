import React from 'react'
import journalAPP from '../assets/portfolio/journalAPP.png'
import blackjack from '../assets/portfolio/blackjack.png'
import toDoApp from '../assets/portfolio/toDoApp.png'
import itauHackaton from '../assets/portfolio/itauHackaton.png'
import socialNetwork from '../assets/portfolio/socialNetwork.png'
import mdLinks from '../assets/portfolio/md-links.png'

export const Portfolio = () => {
    const projects = [
        {
            id: 1,
            src: journalAPP,
            demo: 'https://journalreact.netlify.app',
            about: 'https://github.com/Rose-Aravena/JournalAPP',
            description: 'Aplicación en la que podrás escribir notas y también subir imágenes junto con tus notas. Al guardar la nota, esta se almacenará automáticamente con la fecha en la que la escribiste.'
        },
        {
            id: 2,
            src: blackjack,
            demo: 'https://rose-aravena.github.io/blackjack-js/',
            about: 'https://github.com/Rose-Aravena/blackjack-js',
            description: 'Juego de Blackjack para jugar contra la computadora, donde el objetivo es obtener 21 puntos o acercarse lo más posible a ese número sin pasarse.'
        },
        {
            id: 3,
            src: toDoApp,
            demo: 'https://todoapp-vite.netlify.app',
            about: 'https://github.com/Rose-Aravena/ToDo-app-vite',
            description: 'Crea listas de tareas que te permitirán agregar, borrar y actualizar el estado de las tareas como completadas.'
        },
        {
            id: 4,
            src: itauHackaton,
            demo: 'https://tf-app.vercel.app/home',
            about: 'https://github.com/Rose-Aravena/BancoITAU-tf-app',
            description: 'Proyecto creado en la hackatón de Laboratoria. Panel de visualización de datos (MVP) creado para Banco Itaú, en tan solo 4 días.'
        },
        {
            id: 5,
            src: socialNetwork,
            demo: 'https://social-network-petslifes.netlify.app',
            about: 'https://github.com/Rose-Aravena/SCL020-social-network',
            description: 'Red social para la interacción de dueños de mascotas, donde podrás generar publicaciones con información y consejos sobre el cuidado de tus mascotas.'
        },
        {
            id: 6,
            src: mdLinks,
            demo: 'https://vimeo.com/849247983/f8636df481',
            about: 'https://github.com/Rose-Aravena/SCL020-md-links',
            description: '"md-links" es un módulo que te ayudará a verificar los enlaces de archivos .md y validar si funcionan o están rotos.'
        },
    ];

    return (
        <div
            name="Proyectos"
            className="w-full md:h-screen mb-40 bg-oscuro text-white"
        >
            <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto ">
                <div className="pb-8">
                    <p className="inline text-4xl font-bold border-b-4 border-teal">
                        Proyectos
                    </p>
                </div>

                <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0 mt-6">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="rounded-lg shadow-md bg-gris"
                        >
                            <img
                                src={project.src}
                                alt="my projects"
                                className="duration-200 rounded-md h-52 hover:scale-105"
                            />
                            <p className='mx-4 my-2 pt-5 h-40'>
                                {project.description}
                            </p>
                            <div className="flex items-center justify-center mx-4">
                                <button
                                    onClick={() => window.open(project.demo)}
                                    className="w-1/2 px-6 py-1 duration-200 hover:text-teal border rounded-full border-title"
                                >
                                    Demo
                                </button>
                                <button
                                    onClick={() => window.open(project.about)}
                                    className="w-1/2 px-6 py-1 m-4 duration-200 hover:text-teal border rounded-full border-title"
                                >
                                    Github
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
