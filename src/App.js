import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import MetaTags from './components/MetaTags';

// Lazy loading para componentes no críticos
const Home = lazy(() => import('./components/Home'));
const Store = lazy(() => import('./pages/Store'));
const Cart = lazy(() => import('./components/Cart'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Graciaspage = lazy(() => import('./pages/Gracias'));
const BillingPage = lazy(() => import('./pages/BillingPage'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Servicios = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
    return (
        <CartProvider>
            <Router>
                <div className="app-container" role="application" tabIndex="0">
                    <MetaTags />
                    <NavigationBar aria-label="Navegación principal" />
                    <main style={{ paddingTop: '60px', minHeight: 'calc(100vh - 120px)' }} role="main">
                        <Suspense fallback={<div className="loading">Cargando...</div>}>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <Home
                                            aria-label="Página de inicio"
                                            role="region"
                                        />
                                    }
                                />
                                <Route
                                    path="/store"
                                    element={
                                        <Store
                                            aria-label="Tienda"
                                            role="region"
                                        />
                                    }
                                />
                                <Route
                                    path="/cart"
                                    element={
                                        <Cart
                                            aria-label="Carrito de compras"
                                            role="region"
                                        />
                                    }
                                />
                                <Route
                                    path="/store/:id"
                                    element={
                                        <ProductDetail
                                            aria-label="Detalles del producto"
                                            role="region"
                                        />
                                    }
                                />
                                <Route
                                    path="/gracias"
                                    element={
                                        <Graciaspage
                                            aria-label="Página de agradecimiento"
                                            role="region"
                                        />
                                    }
                                />
                                <Route
                                    path="/billing"
                                    element={
                                        <BillingPage
                                            aria-label="Página de facturación"
                                            role="region"
                                        />
                                    }
                                />
                                <Route
                                    path="/about"
                                    element={
                                        <AboutUs
                                            aria-label="Acerca de nosotros"
                                            role="region"
                                        />
                                    }
                                />
                                <Route
                                    path="/services"
                                    element={
                                        <Servicios
                                            aria-label="Nuestros servicios"
                                            role="region"
                                        />
                                    }
                                />
                                <Route
                                    path="/contacto"
                                    element={
                                        <Contact
                                            aria-label="Contacto"
                                            role="region"
                                        />
                                    }
                                />
                                
                                {/* Rutas del blog */}
                                <Route
                                    path="/blog"
                                    element={
                                        <Blog
                                            aria-label="Blog"
                                            role="region"
                                        />
                                    }
                                />
                                <Route
                                    path="/blog/article/:id"
                                    element={
                                        <ArticleDetail
                                            aria-label="Artículo del blog"
                                            role="region"
                                        />
                                    }
                                />
                                
                                {/* Ruta 404 */}
                                <Route
                                    path="*"
                                    element={
                                        <NotFound
                                            aria-label="Página no encontrada"
                                            role="region"
                                        />
                                    }
                                />
                            </Routes>
                        </Suspense>
                    </main>
                    <Footer aria-label="Pie de página" />
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
