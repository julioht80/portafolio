import React, { useState } from 'react';
import './ImageCarousel.css';

export default function ImageCarousel({ images, onClickImage, height = '100%' }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="j-carousel" style={{ height: height }}>
            <button className="j-carousel-button prev" onClick={prevImage}>
                &#8249;
            </button>
            <figure className="is-4by3">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} onClick={onClickImage} />
            </figure>
            <button className="j-carousel-button next" onClick={nextImage}>
                &#8250;
            </button>
        </div>
    );

}