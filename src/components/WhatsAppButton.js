import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber = '+573111234567', message = '¡Hola! Me gustaría hacer una consulta.' }) => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="whatsapp-button-container">
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="whatsapp-button"
            >
                <FaWhatsapp size={24} />
            </a>
        </div>
    );
};

export default WhatsAppButton;
