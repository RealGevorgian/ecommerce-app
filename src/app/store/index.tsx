import { ReactNode } from 'react';
import { CartProvider } from '../../features/cart/CartContext';


export default function StoreProvider({ children }: { children: ReactNode }) {
    return (
        <CartProvider>
            {/* <AuthProvider> ..future.. */}
            {children}
            {/* </AuthProvider> */}
        </CartProvider>
    );
}
