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
                    Caco Origen del Valle nace del amor por el campo y la transformación natural de los alimentos. Como química y apasionada por lo artesanal, encontré en el cacao un tesoro invaluable de mi región. Inspirada por mi madre y nuestra tradición, decidí crear una marca que respeta el cacao desde su origen hasta su transformación.
                    Aquí no hay secretos ni atajos: solo cacao puro, sin aditivos, trabajado con dedicación para conservar su sabor y sus beneficios. Más que chocolate, ofrecemos una experiencia auténtica y natural, que invita a reconectar con lo esencial y a reconocer el valor de un buen chocolate.
                </p>
            </div>

            {/* Misión */}
            <div className="about-block">
                <div className="about-image">
                    <img
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
                        Ofrecer un chocolate puro y natural que conserve los beneficios esenciales del cacao. Educamos al consumidor para que aprenda a reconocer un buen chocolate, destacando la importancia de una transformación cuidadosa que respete el sabor, los nutrientes y la esencia del grano. Nuestro propósito es nutrir cuerpo y conciencia con menos ingredientes y más verdad.
                    </p>
                </div>
            </div>

            {/* Visión */}
            <div className="about-block">
                <div className="about-image">
                    <img
                        src={getCloudinaryUrl("v1750988906/chocolate_mdfvkg.png")}
                        srcSet={`
              ${getCloudinaryUrl("v1750988906/chocolate_mdfvkg.png", 400, 300)} 400w,
              ${getCloudinaryUrl("v1750988906/chocolate_mdfvkg.png", 600, 400)} 600w,
              ${getCloudinaryUrl("v1750988906/chocolate_mdfvkg.png", 800, 533)} 800w
            `}
                        sizes="(max-width: 768px) 100vw, 45vw"
                        alt="Fermentación del Cacao"
                        loading="lazy"
                    />
                </div>
                <div className="about-text">
                    <h3>Visión</h3>
                    <p>
                        Ser una marca referente en chocolate natural y saludable, donde cada persona descubra que el verdadero sabor del cacao está en su origen. Queremos inspirar una nueva forma de consumir chocolate: más consciente, más simple y más conectada con lo esencial. Porque creemos que lo auténtico no necesita disfraces. Menos es más.
                    </p>
                </div>
            </div>

            {/* Valores */}
            <div className="about-block">
                <div className="about-image">
                    <img
                        src={getCloudinaryUrl("v1750988905/cacao_qsix7f.jpg")}
                        srcSet={`
              ${getCloudinaryUrl("v1750988905/cacao_qsix7f.jpg", 400, 300)} 400w,
              ${getCloudinaryUrl("v1750988905/cacao_qsix7f.jpg", 600, 400)} 600w,
              ${getCloudinaryUrl("v1750988905/cacao_qsix7f.jpg", 800, 533)} 800w
            `}
                        sizes="(max-width: 768px) 100vw, 45vw"
                        alt="Secado del Cacao"
                        loading="lazy"
                    />
                </div>
                <div className="about-text">
                    <h3>Valores</h3>
                    <p>
                        Pureza: Solo ingredientes naturales. Sin aditivos. Sin atajos.

                        Transparencia: Compartimos con claridad qué contiene nuestro chocolate y por qué.

                        Nutrición consciente: Cada tableta es fuente real de bienestar.

                        Respeto por el cacao: Tratamos cada grano con dedicación y precisión.

                        Sostenibilidad: Trabajamos con prácticas responsables y conscientes del entorno.

                        Excelencia artesanal: Cuidamos cada paso para lograr un chocolate con sabor auténtico y calidad superior.
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
                        Cuidamos el cacao para que sus nutrientes lleguen intactos a ti.
                        Transformamos con ciencia, respeto y alma para ofrecerte un chocolate real, nutritivo y lleno de historia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;




