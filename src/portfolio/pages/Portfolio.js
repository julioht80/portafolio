import React, { useEffect, useState } from 'react';
import ImageCarousel from '../components/image-carousel/ImageCarousel';
import ImageModal from '../components/image-modal/ImageModal';
import { Tooltip } from 'react-tooltip';
import './Portfolio.css';

const projects = [
    {
        name: "Rancho El Aleman",
        description: "Sistema integral para la gestión de un rancho, que incluye el control de inventarios, la administración de ventas y compras de ganado, así como la optimización de procesos operativos.",
        images: ["/img/portfolio/RA/1.png", "/img/portfolio/RA/2.png", "/img/portfolio/RA/3.png", "/img/portfolio/RA/4.png"],
        tecnologies: [
            { name: "Angular", icon: "angular" },
            { name: "NodeJS", icon: "nodejs" },
            { name: "Express", icon: "express" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "Google Cloud", icon: "google" },
            { name: "NGINX", icon: "nginx" },
            { name: "Jest", icon: "jest" }
        ],
        links: [
            {
                type: "github",
                text: "GitHub",
                url: null,
                message: "Por motivos de confidencialidad con el cliente,\nno es posible compartir el acceso al repositorio."
            },
            {
                type: "demo",
                text: "Sitio",
                url: "https://elaleman.adas.mx"
            }
        ]
    },
    {
        name: "Portafolio",
        description: "Aplicación web desarrollada para mostrar mis proyectos y habilidades como desarrollador, utilizando React para la interfaz de usuario y un diseño responsivo que garantiza una experiencia óptima en cualquier dispositivo.",
        images: ["/img/portfolio/portfolio/1.png"],
        tecnologies: [
            { name: "React", icon: "react" },
            { name: "Bulma Framework", icon: "bulma" }
        ],
        links: [
            {
                type: "github",
                text: "GitHub",
                url: "https://github.com/julioht80/portafolio"
            },
            {
                type: "demo",
                text: "Demo",
                url: "/home"
            }
        ]
    }
];


export default function Portfolio() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [show, setShow] = useState(false);

    const openModal = (images) => {
        setSelectedImages(images);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImages([]);
    };

    useEffect(() => {
        setShow(true);
    }, []);


    return (
        <section className="section j-portfolio">
            <div className="container">
                <h2 className="title">Mis Proyectos</h2>
                <div className="columns is-multiline">
                    {projects.map((project, index) => (
                        <div 
                            className={`column is-one-third j-portfolio-project ${show ? 'animate' : ''}`} 
                            key={index}
                            style={{ transitionDelay: `${index * 150}ms`}}
                        >
                            <div className="card">
                                <div className="card-image">
                                    <ImageCarousel images={project.images} onClickImage={() => openModal(project.images)} height={"213px"}/>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{project.name}</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        {project.description}
                                    </div>
                                    <div className="content">
                                    {project.tecnologies.map((tech, idx) => (
                                        <span className="icon j-portfolio-icon" key={idx}>
                                            <img 
                                                src={`${process.env.PUBLIC_URL}/img/skills/${tech.icon}.png`} 
                                                alt={tech.name} 
                                                data-tooltip-id={`tooltip-${idx}`}
                                                data-tooltip-content={tech.name}
                                            />
                                            <Tooltip id={`tooltip-${idx}`} place="top" type="dark" effect="solid" />
                                        </span>
                                    ))}
                                </div>
                                </div>
                                <footer className="card-footer">
                                    {project.links.map((link, idx) => (
                                        (
                                            <a 
                                                href={link.url} 
                                                className={`card-footer-item ${!link.url ? "j-cursor-not-allowed has-text-grey" : ""}`}
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                key={idx}
                                                data-tooltip-id={`tooltip-link-${index}-${idx}`} 
                                                data-tooltip-content={link.message}
                                            >
                                                <span className="icon">
                                                    {link.type === "github" ? (
                                                        <i className="fab fa-github"></i>
                                                    ) : (
                                                        <i className="fas fa-external-link-alt"></i>
                                                    )}
                                                </span>
                                                {link.text}
                                                <Tooltip id={`tooltip-link-${index}-${idx}`} place="top" type="dark" effect="solid" />
                                            </a>
                                        )
                                    ))}
                                </footer>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ImageModal images={selectedImages} isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
}