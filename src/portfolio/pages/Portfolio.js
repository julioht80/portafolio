import React, { useState } from 'react';
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
            { name: "NGINX", icon: "nginx" }
        ],
        github: {
            active: false,
            url: false,
            message: "Por motivos de confidencialidad con el cliente, no es posible compartir el acceso al repositorio.",
        },
        demo: "https://elaleman.adas.mx"
    }
];


export default function Portfolio() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (images) => {
        setSelectedImages(images);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImages([]);
    };

    return (
        <section className="section j-portfolio">
            <div className="container">
                <h2 className="title">Mis Proyectos</h2>
                <div className="columns is-multiline">
                    {projects.map((project, index) => (
                        <div className="column is-one-third" key={index}>
                            <div className="card">
                                <div className="card-image">
                                    <ImageCarousel images={project.images} onClickImage={() => openModal(project.images)} height={"200px"}/>
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
                                                src={`/img/skills/${tech.icon}.png`} 
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
                                {project.github.active ? (
                                    <a href={project.github.url} className="card-footer-item" target="_blank" rel="noopener noreferrer">
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>
                                        GitHub
                                    </a>
                                ) : (
                                    <a className="card-footer-item j-cursor-not-allowed has-text-grey" data-tooltip-id={`tooltip-github-${index}`} data-tooltip-content={project.github.message}>
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>
                                        GitHub
                                        <Tooltip id={`tooltip-github-${index}`} place="top" type="dark" effect="solid" />
                                    </a>
                                )}
                                    <a href={project.demo} className="card-footer-item" target="_blank" rel="noopener noreferrer">
                                        <span className="icon">
                                            <i className="fas fa-external-link-alt"></i>
                                        </span>
                                        Sitio
                                    </a>
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