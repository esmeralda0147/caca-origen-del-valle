import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const cloudinaryBase = "https://res.cloudinary.com/dlxp4pqso/image/upload";

    const getCloudinaryUrl = (publicId, width = 600, height = 400) =>
        `${cloudinaryBase}/f_auto,q_auto,w_${width},h_${height},c_fill/${publicId}`;

    return (
        <section className="about-section">
            <div className="company-description-wrapper">
                <h3>Conoce nuestra historia</h3>
                <p>
                    Desde siempre, el campo ha sido mi hogar. Crecí rodeada de naturaleza, donde cada alimento tiene su tiempo, su proceso y su esencia...
                    Chocolate Origen del Valle no es solo un producto, es una experiencia que conecta con quienes buscan autenticidad, calidad y un regreso a lo natural.
                </p>
            </div>

            {/* Misión */}
            <div className="about-block">
                <div className="about-image">
                    <img
                        src={getCloudinaryUrl("v1748712438/cosecha-caco_dvgjwg.jpg")}
                        srcSet={`
              ${getCloudinaryUrl("v1748712438/cosecha-caco_dvgjwg.jpg", 400, 300)} 400w,
              ${getCloudinaryUrl("v1748712438/cosecha-caco_dvgjwg.jpg", 600, 400)} 600w,
              ${getCloudinaryUrl("v1748712438/cosecha-caco_dvgjwg.jpg", 800, 533)} 800w
            `}
                        sizes="(max-width: 768px) 100vw, 45vw"
                        alt="Cosecha de Cacao"
                        loading="lazy"
                    />
                </div>
                <div className="about-text">
                    <h3>Misión</h3>
                    <p>
                        Crear conciencia sobre los verdaderos beneficios del chocolate y enseñar a identificar un buen cacao de forma sencilla...
                    </p>
                </div>
            </div>

            {/* Visión */}
            <div className="about-block">
                <div className="about-image">
                    <img
                        src={getCloudinaryUrl("v1748712284/fermentacion_t0al4f.jpg")}
                        srcSet={`
              ${getCloudinaryUrl("v1748712284/fermentacion_t0al4f.jpg", 400, 300)} 400w,
              ${getCloudinaryUrl("v1748712284/fermentacion_t0al4f.jpg", 600, 400)} 600w,
              ${getCloudinaryUrl("v1748712284/fermentacion_t0al4f.jpg", 800, 533)} 800w
            `}
                        sizes="(max-width: 768px) 100vw, 45vw"
                        alt="Fermentación del Cacao"
                        loading="lazy"
                    />
                </div>
                <div className="about-text">
                    <h3>Visión</h3>
                    <p>
                        Ser una marca reconocida por su calidad excepcional...
                    </p>
                </div>
            </div>

            {/* Valores */}
            <div className="about-block">
                <div className="about-image">
                    <img
                        src={getCloudinaryUrl("v1748712286/secar_vhnflw.jpg")}
                        srcSet={`
              ${getCloudinaryUrl("v1748712286/secar_vhnflw.jpg", 400, 300)} 400w,
              ${getCloudinaryUrl("v1748712286/secar_vhnflw.jpg", 600, 400)} 600w,
              ${getCloudinaryUrl("v1748712286/secar_vhnflw.jpg", 800, 533)} 800w
            `}
                        sizes="(max-width: 768px) 100vw, 45vw"
                        alt="Secado del Cacao"
                        loading="lazy"
                    />
                </div>
                <div className="about-text">
                    <h3>Valores</h3>
                    <p>
                        PUREZA: Ingredientes naturales, sin aditivos...
                        TRANSPARENCIA, CONSCIENCIA, RESPETO, SOSTENIBILIDAD, CALIDAD.
                    </p>
                </div>
            </div>

            {/* Diferenciador */}
            <div className="about-block">
                <div className="about-image">
                    <img
                        src={getCloudinaryUrl("v1748712283/equipo_tghrw9.jpg")}
                        srcSet={`
              ${getCloudinaryUrl("v1748712283/equipo_tghrw9.jpg", 400, 300)} 400w,
              ${getCloudinaryUrl("v1748712283/equipo_tghrw9.jpg", 600, 400)} 600w,
              ${getCloudinaryUrl("v1748712283/equipo_tghrw9.jpg", 800, 533)} 800w
            `}
                        sizes="(max-width: 768px) 100vw, 45vw"
                        alt="Nuestro Equipo"
                        loading="lazy"
                    />
                </div>
                <div className="about-text">
                    <h3>Diferenciador y Enfoque</h3>
                    <p>
                        Nuestro compromiso es cuidar los nutrientes del cacao para que lleguen intactos al consumidor.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;




