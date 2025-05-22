import React from 'react';

const Analytics = ({ analyticsId }) => {
    return (
        <>
            {/* Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
            />
            <script dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${analyticsId}');
                `
            }} />

            {/* Eventos personalizados */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    // Evento de inicio de sesión
                    function trackLogin() {
                        gtag('event', 'login', {
                            'event_category': 'user',
                            'event_label': 'login_success'
                        });
                    }

                    // Evento de añadir al carrito
                    function trackAddToCart(product) {
                        gtag('event', 'add_to_cart', {
                            'event_category': 'ecommerce',
                            'event_label': product.name,
                            'value': product.price
                        });
                    }

                    // Evento de inicio de checkout
                    function trackCheckoutStart() {
                        gtag('event', 'checkout_start', {
                            'event_category': 'ecommerce'
                        });
                    }

                    // Evento de finalización de compra
                    function trackPurchase(order) {
                        gtag('event', 'purchase', {
                            'event_category': 'ecommerce',
                            'event_label': 'purchase_success',
                            'value': order.totalAmount
                        });
                    }
                `
            }} />
        </>
    );
};

export default Analytics;
