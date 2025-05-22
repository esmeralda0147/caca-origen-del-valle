import React, { useState } from 'react';

const LazyImage = ({ src, alt, className, width, height, ...props }) => {
    const [loaded, setLoaded] = useState(false);

    const imageSrc = src?.endsWith('.webp') ? src : `${src}?format=webp`;

    return (
        <div
            className={`lazy-image-container ${className}`}
            style={{
                width: width || '100%',
                height: height || 'auto',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <img
                src={imageSrc}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className={`lazy-image ${loaded ? 'loaded' : ''}`}
                {...props}
            />
            {!loaded && (
                <div className="loading-placeholder">
                    <div className="loading-skeleton"></div>
                </div>
            )}
        </div>
    );
};

export default LazyImage;
