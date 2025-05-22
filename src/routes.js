import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy loading para componentes no críticos
const Home = lazy(() => import('../components/Home'));
const Store = lazy(() => import('../pages/Store'));
const Cart = lazy(() => import('../components/Cart'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Graciaspage = lazy(() => import('../pages/Gracias'));
const BillingPage = lazy(() => import('../pages/BillingPage'));
const AboutUs = lazy(() => import('../components/AboutUs'));
const Servicios = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
const Blog = lazy(() => import('../pages/Blog'));
const ArticleDetail = lazy(() => import('../pages/ArticleDetail'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const AppRoutes = () => (
    <Suspense fallback={<div className="loading">Cargando...</div>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/store/:id" element={<ProductDetail />} />
            <Route path="/gracias" element={<Graciaspage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Servicios />} />
            <Route path="/contacto" element={<Contact />} />
            
            {/* Rutas del blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/article/:id" element={<ArticleDetail />} />
            
            {/* Ruta 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
);
