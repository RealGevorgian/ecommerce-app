import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppRoutes from './app/routes';
import { useCart } from './features/cart/CartContext';
import './App.css';

export default function App() {
    const { cart } = useCart();
    const cartQty = cart.reduce((sum, item) => sum + item.qty, 0);

    // key trick to re‑run badge pop animation
    const [badgeKey, setBadgeKey] = useState(0);
    useEffect(() => setBadgeKey(k => k + 1), [cartQty]);

    return (
        <div className="app">
            {/* ───── HEADER ───── */}
            <header className="app__header">
                <nav className="nav">
                    <NavLink to="/" className="nav__logo">
                        E‑Shop
                    </NavLink>

                    <ul className="nav__list">
                        <li>
                            <NavLink to="/" end>
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/history">SpaceX History</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className="nav__cart">
                                Cart
                                <span key={badgeKey} className="nav__badge pop">
                  {cartQty}
                </span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* ───── ROUTES ───── */}
            <main className="app__main">
                <AppRoutes />
            </main>

            {/* ───── FOOTER ───── */}
            <footer className="app__footer">
                <small>
                    © {new Date().getFullYear()} E‑Shop Demo. All rights reserved.
                </small>
            </footer>
        </div>
    );
}
