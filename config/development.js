module.exports = {
    // Configuración de la API
    api: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3001',
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json'
        }
    },

    // Configuración de Wompi
    wompi: {
        environment: process.env.WOMPI_ENVIRONMENT || 'sandbox',
        currency: 'COP',
        successUrl: process.env.FRONTEND_URL + '/payment/success',
        failureUrl: process.env.FRONTEND_URL + '/payment/failure'
    },

    // Configuración de correo
    email: {
        from: process.env.EMAIL_USER,
        contactEmail: process.env.CONTACT_EMAIL
    },

    // Configuración de debug
    debug: {
        logLevel: process.env.LOG_LEVEL || 'debug',
        showErrors: true
    }
};
