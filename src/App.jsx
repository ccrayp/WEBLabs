import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProductsPage from './ProductsPage';
import ContactPage from './ContactPage';
import OrderPage from './OrderPage';
import Header from './Header';
import Navigation from './Navigation';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/order" element={<OrderPage />} />
                </Routes>
        </BrowserRouter>
    );
}