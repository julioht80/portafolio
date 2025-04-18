import React from 'react';
import ImageCarousel from './../image-carousel/ImageCarousel.js'
import './ImageModal.css';;

export default function ImageModal({ images, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={`modal ${isOpen ? 'is-active' : ''} custom-modal`}>
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-content">
                <div className="box">
                    <ImageCarousel images={images} />
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
        </div>
    );
}