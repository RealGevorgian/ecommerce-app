import {
    createContext,
    useContext,
    useReducer,
    useEffect,
    ReactNode,
    Dispatch,
} from 'react';
import { cartReducer, CartItem, CartAction } from './cartReducer';

type CartContextShape = {
    cart: CartItem[];
    dispatch: Dispatch<CartAction>;
};

const CartContext = createContext<CartContextShape | null>(null);

/* ---------- provider ---------- */
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const stored = localStorage.getItem('cart');
        return stored ? (JSON.parse(stored) as CartItem[]) : [];
    });

    /* persist to localStorage */
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

/* ---------- hook ---------- */
export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) {
        throw new Error('useCart must be used within <CartProvider>');
    }
    return ctx;
};
