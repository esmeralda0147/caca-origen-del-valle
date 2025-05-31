import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';

import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

// Páginas principales
import Home from './components/Home';
import Store from './pages/Store';
import Cart from './components/Cart';
import ProductDetail from './pages/ProductDetail';
import Graciaspage from './pages/Gracias';
import BillingPage from './pages/BillingPage';
import AboutUs from './components/AboutUs';
import Servicios from './pages/Services';
import Contact from './pages/Contact';

// Páginas de Blog
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <div className="app-container">
                    <NavigationBar />

                    <main style={{ paddingTop: '60px', minHeight: '80vh' }}>
                        <Routes>
                            {/* Rutas generales */}
                            <Route path="/" element={<Home />} />
                            <Route path="/store" element={<Store />} />
                            <Route path="/store/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/billing" element={<BillingPage />} />
                            <Route path="/gracias" element={<Graciaspage />} />

                            {/* Rutas informativas */}
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/services" element={<Servicios />} />
                            <Route path="/contacto" element={<Contact />} />

                            {/* Blog */}
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:id" element={<ArticleDetail />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
