import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Writing from '../../shared/components/Writing/Writing.js';

export default function Home() {

    return (
        <>
            <section className="section j-home-section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-full-mobile is-half-tablet is-half-desktop is-flex is-align-items-center">
                            <div className="j-home-about">
                                <p className='title is-6 mb-0'>Hola, soy</p>
                                <h3 className="title is-1 mb-2">Julio De la Torre</h3>
                                <h3 className="title is-4">
                                    <Writing 
                                        text="Desarrollador Full Stack"
                                        time={2}
                                        space={21}
                                    />
                                </h3>
                                
                                <p>
                                    Soy un desarrollador con más de 9 años de experiencia en backend y frontend, especializado en JavaScript y Java. Me apasiona la tecnología y la programación, y disfruto creando aplicaciones que mejoran la vida de las personas.
                                </p>    
                                <div className='j-home-buttons'>
                                    <Link className="button is-rounded" to="/cv">VER CV</Link>
                                    <Link className="button is-primary is-rounded ml-3" to="/portfolio">PORTAFOLIO</Link>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <figure className="image j-home-img">
                                <img src={process.env.PUBLIC_URL + "/img/wallpaper.png"} alt="Julio Cesar Hernández De la Torre" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}