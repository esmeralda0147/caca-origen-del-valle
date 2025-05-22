const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const path = require('path');
const { Wompi } = require('@wompi/sdk-node');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

// Configurar variables de entorno
dotenv.config();

// Inicializar Wompi
const wompi = new Wompi({
    apiKey: process.env.WOMPI_API_KEY,
    environment: process.env.NODE_ENV === 'production' ? 'production' : 'sandbox'
});

const app = express();

// Configuración de seguridad
app.use(helmet());
app.use(compression());

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Rate limiting para seguridad
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Límite de 100 peticiones por IP
    message: 'Demasiadas peticiones. Por favor, intenta de nuevo más tarde.'
});

// Middleware
app.use(limiter);

// Configurar CORS de manera más segura
const frontendUrl = process.env.FRONTEND_URL;
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || origin === frontendUrl) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
    maxAge: 3600,
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Configurar nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message: 'Error interno del servidor',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Ruta para enviar formulario de contacto
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Validar datos
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        // Validar email
        if (!isValidEmail(email)) {
            return res.status(400).json({ error: 'Email no válido' });
        }

        // Enviar correo
        const mailOptions = {
            from: email,
            to: process.env.CONTACT_EMAIL,
            subject: 'Nuevo mensaje de contacto - Mi Tienda',
            html: `
                <h2>Nuevo mensaje de contacto</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Mensaje enviado exitosamente' });
    } catch (error) {
        console.error('Error al enviar mensaje:', error);
        res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
});

// Función de validación de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Ruta para iniciar pago con Wompi
app.post('/api/payment/init', async (req, res) => {
    try {
        const { amount, currency, description, customer } = req.body;
        
        // Validar datos
        if (!amount || !currency || !description || !customer.email) {
            return res.status(400).json({ error: 'Datos de pago incompletos' });
        }

        // Validar moneda
        if (!['COP', 'USD'].includes(currency.toUpperCase())) {
            return res.status(400).json({ error: 'Moneda no soportada' });
        }

        // Crear pago
        const payment = await wompi.createPayment({
            amount_in_cents: amount * 100,
            currency,
            description,
            customer: {
                email: customer.email,
                name: customer.name,
                phone_number: customer.phone
            },
            payment_method: {
                type: 'WEB_TOKEN'
            },
            webhook_url: `${process.env.BASE_URL}/api/payment/webhook`
        });

        res.status(200).json(payment);
    } catch (error) {
        console.error('Error al crear pago:', error);
        res.status(500).json({ 
            error: 'Error al procesar el pago',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Ruta webhook para Wompi
app.post('/api/payment/webhook', async (req, res) => {
    try {
        const { event } = req.body;
        const { type, data } = event;
        
        // Validar firma
        const signature = req.headers['x-wompi-signature'];
        if (!signature || !wompi.verifyWebhookSignature(signature, req.body)) {
            return res.status(401).send('Firma no válida');
        }

        // Procesar el evento según el tipo
        switch (type) {
            case 'PAYMENT.CREATED':
                console.log('Pago creado:', data);
                break;
            case 'PAYMENT.CONFIRMED':
                await handlePaymentConfirmation(data);
                break;
            case 'PAYMENT.CANCELLED':
                await handlePaymentCancellation(data);
                break;
            case 'PAYMENT.REFUNDED':
                await handlePaymentRefund(data);
                break;
            default:
                console.log('Evento no manejado:', type);
        }

        res.status(200).send('Webhook recibido');
    } catch (error) {
        console.error('Error en webhook:', error);
        res.status(500).send('Error en webhook');
    }
});

// Funciones de manejo de eventos
async function handlePaymentConfirmation(data) {
    try {
        // Aquí iría la lógica para confirmar el pago
        console.log('Pago confirmado:', data);
    } catch (error) {
        console.error('Error al confirmar pago:', error);
    }
}

async function handlePaymentCancellation(data) {
    try {
        // Aquí iría la lógica para cancelar el pago
        console.log('Pago cancelado:', data);
    } catch (error) {
        console.error('Error al cancelar pago:', error);
    }
}

async function handlePaymentRefund(data) {
    try {
        // Aquí iría la lógica para procesar devolución
        console.log('Pago devuelto:', data);
    } catch (error) {
        console.error('Error al procesar devolución:', error);
    }
}

// Ruta para obtener información del pago
app.get('/api/payment/:paymentId', async (req, res) => {
    try {
        const { paymentId } = req.params;
        const payment = await wompi.getPayment(paymentId);
        
        // Validar que el pago existe
        if (!payment) {
            return res.status(404).json({ error: 'Pago no encontrado' });
        }

        res.status(200).json(payment);
    } catch (error) {
        console.error('Error al obtener pago:', error);
        res.status(500).json({ 
            error: 'Error al obtener información del pago',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Ruta para verificar que el servidor está funcionando
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
        version: process.env.npm_package_version
    });
});

// Configurar puerto
const PORT = process.env.PORT || 3001;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`Modo: ${process.env.NODE_ENV}`);
    console.log(`Base URL: ${process.env.BASE_URL}`);
    if (process.env.DEBUG) {
        console.log('Debug mode: ON');
    }
});
