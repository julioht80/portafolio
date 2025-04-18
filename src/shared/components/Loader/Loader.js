import React, { useState, useEffect } from 'react';
import './Loader.css';

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
      }, []);

    return (
            loading ? (
                <div className='j-layaut-loader'>
                    <div className="j-loader">
                        <div className="circle">
                            <div className="dot"></div>
                            <div className="outline"></div>
                        </div>
                        <div className="circle">
                            <div className="dot"></div>
                            <div className="outline"></div>
                        </div>
                        <div className="circle">
                            <div className="dot"></div>
                            <div className="outline"></div>
                        </div>
                        <div className="circle">
                            <div className="dot"></div>
                            <div className="outline"></div>
                        </div>
                    </div>
            </div>
            ) : null
    );
}
