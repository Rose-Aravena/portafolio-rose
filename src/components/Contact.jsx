import React from 'react';

const Contact = () => {
    return (
        <div
            name="Contacto"
            className="w-full h-screen bg-oscuro p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-teal">
                        Contacto
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/7390d120-2f7f-4712-a1c6-1d80b168cdc4"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Ingresa tu mensaje..."
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>
                        <button className="text-white px-6 py-3 mx-auto flex items-center rounded-full border mt-4 hover:bg-teal">
                            Contactar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;