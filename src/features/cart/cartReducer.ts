import { Product } from '../products/types';

export type CartItem = Product & { qty: number };

export type CartAction =
    | { type: 'ADD'; payload: Product }
    | { type: 'REMOVE'; payload: string }
    | { type: 'CHANGE_QTY'; payload: { id: string; qty: number } }
    | { type: 'CLEAR' };

export const cartReducer = (
    state: CartItem[],
    action: CartAction,
): CartItem[] => {
    switch (action.type) {
        case 'ADD': {
            const existing = state.find(i => i.id === action.payload.id);
            return existing
                ? state.map(i =>
                    i.id === existing.id ? { ...i, qty: i.qty + 1 } : i,
                )
                : [...state, { ...action.payload, qty: 1 }];
        }
        case 'REMOVE':
            return state.filter(i => i.id !== action.payload);
        case 'CHANGE_QTY':
            return state.map(i =>
                i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i,
            );
        case 'CLEAR':
            return [];
        default:
            return state;
    }
};
