import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getImageUrl } from '../utils/cloudinary';
import { breakpoints } from '../assets';

const OptimizedImage = ({
    src,
    alt = '',
    width = 800,
    height = 600,
    className = '',
    lazy = true,
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(true);
    
    // Generar diferentes tamaños de imagen para responsive
    const sizes = `
        (max-width: ${breakpoints.mobile}) 320px,
        (max-width: ${breakpoints.tablet}) 768px,
        (max-width: ${breakpoints.desktop}) 1024px,
        1280px
    `;

    // Generar diferentes tamaños de imagen
    const srcSet = `
        ${getImageUrl(src, { width: 320, height: 240 })} 320w,
        ${getImageUrl(src, { width: 768, height: 576 })} 768w,
        ${getImageUrl(src, { width: 1024, height: 768 })} 1024w,
        ${getImageUrl(src, { width: 1280, height: 960 })} 1280w
    `;

    const defaultImage = getImageUrl(src, { width, height });

    return (
        <picture>
            <source
                srcSet={srcSet}
                sizes={sizes}
                type="image/jpeg"
            />
            <img
                src={defaultImage}
                alt={alt}
                width={width}
                height={height}
                className={`${className} ${isLoading ? 'opacity-0' : ''}`}
                onLoad={() => setIsLoading(false)}
                loading={lazy ? 'lazy' : 'eager'}
                {...props}
            />
        </picture>
    );
};

OptimizedImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string,
    lazy: PropTypes.bool,
};

export default OptimizedImage;
