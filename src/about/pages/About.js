import { useState } from 'react';
import React from 'react';
import './About.css';
import IconMedia from '../../shared/components/IconMedia/IconMedia';

export default function About() {

    const [currentImage, setCurrentImage] = useState('bike');

    const S = (s) => {
        return (<span>{'\u00A0'.repeat(s)}</span>);
    }

    const handleMouseEnter = (id) => {
        setCurrentImage(id);
    };

    const MediaX = () => {
        return (
            <figure className="image j-about-img">
                <img src={ process.env.PUBLIC_URL + '/img/about/' + currentImage + '.jpg'} alt={currentImage.id} key={currentImage} />
            </figure>
        );
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-full-mobile is-half-tablet is-half-desktop is-flex is-align-items-center">
                            <div className="j-about-json">
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-const'>{'const'}</p>
                                    <p className='j-about-json-filed'>{S(2)}{'myInfo'}</p>
                                    <p className='j-about-json-dots'>{S(2)}{'='}</p>
                                    <p className='j-about-json-key-1'>{S(2)}{'{'}</p>
                                </div>
                                <div className='j-about-json-line' onMouseEnter={() => handleMouseEnter('profile')}>
                                    <p className='j-about-json-filed'>{S(8)}{'"fullname"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{':'}</p>
                                    <p className='j-about-json-value'>{S(2)}{'"Julio Cesar Hernández De la Torre"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>
                                <div className='j-about-json-line' onMouseEnter={() => handleMouseEnter('birthdate')}>
                                    <p className='j-about-json-filed'>{S(8)}{'"birthdate"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{':'}</p>
                                    <p className='j-about-json-value'>{S(2)}{'"1993-04-20"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                    <p className='j-about-json-comment'>{S(2)}{'// 31 years old'}</p>
                                </div>
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-filed'>{S(8)}{'"location"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{':'}</p>
                                    <p className='j-about-json-key-2'>{S(2)}{'{'}</p>
                                </div>
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-filed'>{S(16)}{'"country"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{':'}</p>
                                    <p className='j-about-json-value'>{S(2)}{'"Mexico"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>
                                <div className='j-about-json-line' onMouseEnter={() => handleMouseEnter('morelos')}>
                                    <p className='j-about-json-filed'>{S(16)}{'"state"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{':'}</p>
                                    <p className='j-about-json-value'>{S(2)}{'"Morelos"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>
                                <div className='j-about-json-line' onMouseEnter={() => handleMouseEnter('cuernavaca')}>
                                    <p className='j-about-json-filed'>{S(16)}{'"city"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{':'}</p>
                                    <p className='j-about-json-value'>{S(2)}{'"Cuernavaca"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-key-1'>{S(8)}{'}'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>

                                <div className='j-about-json-line'>
                                    <p className='j-about-json-filed'>{S(8)}{'"hobbies"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{':'}</p>
                                    <p className='j-about-json-key-2'>{S(2)}{'['}</p>
                                </div>
                                <div className='j-about-json-line' onMouseEnter={() => handleMouseEnter('bike')}>
                                    <p className='j-about-json-value'>{S(16)}{'"Bicicleta de montaña"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-value'>{S(16)}{'"Vieojuegos"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-value'>{S(16)}{'"Mi setup"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-value'>{S(16)}{'"Programacion"'}</p>
                                </div>
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-key-1'>{S(8)}{']'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-filed'>{S(8)}{'"education"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{':'}</p>
                                    <p className='j-about-json-key-2'>{S(2)}{'{'}</p>
                                </div>
                                <div className='j-about-json-line' onMouseEnter={() => handleMouseEnter('utez')}>
                                    <p className='j-about-json-filed'>{S(16)}{'"university"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{':'}</p>
                                    <p className='j-about-json-value'>{S(2)}{'"UTEZ"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-filed'>{S(16)}{'"career"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{':'}</p>
                                    <p className='j-about-json-value'>{S(2)}{'"ING. Tecnologias de la información"'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-key-1'>{S(8)}{'}'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{','}</p>
                                </div>
                                <div className='j-about-json-line'>
                                    <p className='j-about-json-key-1'>{'}'}</p>
                                    <p className='j-about-json-dots'>{S(1)}{';'}</p>
                                </div>

                            </div>
                        </div>
                        <div className="column is-full-mobile is-half-desktop j-image-content">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image">
                                        {MediaX()}
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <div>
                <ul className="j-icon-ul">
                    <IconMedia
                        tooltipText="LinkedIn"
                        svg="M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M71.6,71.5c0,0,0,0.1-0.1,0.1c-0.8,1.2-2,1.8-3.2,1.8  c-0.7,0-1.4-0.2-2-0.6c-10.2-6.3-23.3-7.7-38.8-4.1c-2.1,0.6-4-0.9-4.5-2.7c-0.6-2.3,0.9-4.1,2.7-4.6c17.7-4,32.6-2.3,44.4,5  c0.9,0.4,1.5,1,1.8,1.9C72.2,69.3,72.1,70.5,71.6,71.5z M76.9,59.3L76.9,59.3c-0.8,1.1-1.9,1.9-3.2,2.1c-0.2,0-0.5,0.1-0.7,0.1  c-0.8,0-1.6-0.3-2.3-0.7c-12-7.3-30.1-9.4-43.9-5c-2.5,0.6-5-0.7-5.6-3c-0.6-2.5,0.7-4.9,3-5.5c16.5-5,37.2-2.5,51.4,6.2  c0.8,0.4,1.5,1.3,1.8,2.5C77.9,57,77.6,58.3,76.9,59.3z M83.2,45.6c-1,1.4-2.7,2.1-4.4,2.1c-0.9,0-1.9-0.2-2.7-0.7c0,0,0,0,0,0  c-13.9-8.3-37.8-9.3-51.4-5.1c-2.7,0.8-5.5-0.7-6.4-3.3c-0.8-2.7,0.7-5.6,3.3-6.4c16.2-4.8,43-3.8,59.8,6.2  C83.8,39.6,84.7,42.9,83.2,45.6C83.3,45.5,83.3,45.5,83.2,45.6z"
                        svgFillColor="#0077B5"
                    />
                    <IconMedia
                        tooltipText="LinkedIn"
                        svg="M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M71.6,71.5c0,0,0,0.1-0.1,0.1c-0.8,1.2-2,1.8-3.2,1.8  c-0.7,0-1.4-0.2-2-0.6c-10.2-6.3-23.3-7.7-38.8-4.1c-2.1,0.6-4-0.9-4.5-2.7c-0.6-2.3,0.9-4.1,2.7-4.6c17.7-4,32.6-2.3,44.4,5  c0.9,0.4,1.5,1,1.8,1.9C72.2,69.3,72.1,70.5,71.6,71.5z M76.9,59.3L76.9,59.3c-0.8,1.1-1.9,1.9-3.2,2.1c-0.2,0-0.5,0.1-0.7,0.1  c-0.8,0-1.6-0.3-2.3-0.7c-12-7.3-30.1-9.4-43.9-5c-2.5,0.6-5-0.7-5.6-3c-0.6-2.5,0.7-4.9,3-5.5c16.5-5,37.2-2.5,51.4,6.2  c0.8,0.4,1.5,1.3,1.8,2.5C77.9,57,77.6,58.3,76.9,59.3z M83.2,45.6c-1,1.4-2.7,2.1-4.4,2.1c-0.9,0-1.9-0.2-2.7-0.7c0,0,0,0,0,0  c-13.9-8.3-37.8-9.3-51.4-5.1c-2.7,0.8-5.5-0.7-6.4-3.3c-0.8-2.7,0.7-5.6,3.3-6.4c16.2-4.8,43-3.8,59.8,6.2  C83.8,39.6,84.7,42.9,83.2,45.6C83.3,45.5,83.3,45.5,83.2,45.6z"
                        svgFillColor="#0077B5"
                    />
                </ul>

            </div>
        </>
    );
}