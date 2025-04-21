import { Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from '../features/products/ProductsPage';
import CartPage from '../features/cart/CartPage';
import LoginPage from '../features/login/LoginPage';
import HistoryPage from '../features/history/HistoryPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/history" element={<HistoryPage />} />
            {/* fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
