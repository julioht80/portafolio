import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

export default function ImageCarousel({ images, onClickImage, height = '100%', isOpen}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if(isOpen){
            document.addEventListener('keydown', (event) => {
                if (event.key === 'ArrowRight') {
                    nextImage();
                }
                if (event.key === 'ArrowLeft') {
                    prevImage();
                }
            });
        }
    }, [isOpen]);
    


    return (
        <div className="j-carousel" style={{ height: height }}>
            {
                images.length > 1 ?
                <button className="j-carousel-button prev" onClick={prevImage}>
                    &#8249;
                </button>
                :
                null
            }
            
            <figure className="is-4by3">
            <img src={process.env.PUBLIC_URL + images[currentIndex]} alt={`Slide ${currentIndex + 1}`} onClick={onClickImage} />
            </figure>
            {
                images.length > 1 ?
                <button className="j-carousel-button next" onClick={nextImage}>
                    &#8250;
                </button>
                :
                null
            }
            
        </div>
    );

}