import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import me from '../assets/me.jpg'

export const About = () => {
    const handleDownloadClick = () => {
        window.open('https://drive.google.com/file/d/1kj0Bqhn6fPwfBaizlhc0Vzj4e_kfbAT8/view?usp=share_link', '_blank');
    };
    
    const handleGithubClick = () => {
        window.open('https://github.com/Rose-Aravena', '_blank');
    };

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/rose-aravena/', '_blank');
    };

    return (
        <div
            name="Sobre mí"
            className="w-full mb-56 md:h-screen bg-oscuro text-white"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full p-4 md:flex-row">
                <div className="flex flex-col justify-center h-full py-2">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-teal ">
                            Sobre mí
                        </p>
                    </div>

                    <p className="max-w-md text-texto">
                        Mi pasión por la tecnología y la programación me impulsa cada día,
                        haciéndome más curioso, apasionado, proactivo y autodidacta.
                        Me gustan los desafíos, ya que constantemente busco poner a
                        prueba mis capacidades y habilidades, para poder mejorar día a día y superarme a mí mismo.
                    </p>
                    <div className="flex gap-2 py-4 text-texto">
                        <button onClick={handleDownloadClick}
                            className="flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded-full border hover:bg-teal">
                            Descargar CV
                        </button>
                        <button className="boton-Icono text-texto hover:text-teal" onClick={handleGithubClick}>
                            <AiOutlineGithub className="text-4xl mb-2 mx-4" />
                        </button>
                        <button className="boton-Icono text-texto hover:text-teal" onClick={handleLinkedinClick}>
                            <AiOutlineLinkedin className="text-4xl mb-2" />
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src={me}
                        alt="my"
                        className="rounded-full mx-auto h-72"
                    />
                </div>
            </div>
        </div>
    )
}
