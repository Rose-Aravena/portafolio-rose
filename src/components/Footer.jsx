import React from 'react';

const Footer = () => {
    const links = [
        {
            id: 1,
            title: 'linkedin',
            href: 'https://www.linkedin.com/in/rose-aravena/',
        },
        {
            id: 2,
            title: 'github',
            href: 'https://github.com/Rose-Aravena',
        }
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-teal">
            <p className="cursor-default ">Rose Aravena 💖</p>
            <ul className="flex ">
                {links.map(link => (
                    <li
                        key={link.id}
                        className="px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-white duration-200"
                    >
                        <a href={link.href} target="_blank" rel="noreferrer">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Footer;