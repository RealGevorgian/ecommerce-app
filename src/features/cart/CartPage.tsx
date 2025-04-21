import { useCart } from './CartContext';
import CartItem from './CartItem';
import { Button } from '../../app/shared/ui/Button';   // path fixed

export default function CartPage() {
    const { cart, dispatch } = useCart();
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    if (!cart.length) return <h2 style={{ textAlign: 'center' }}>Your cart is empty 🛒</h2>;

    return (
        <section className="cart-page">
            <h1>Shopping Cart</h1>

            {cart.map(i => (
                <CartItem key={i.id} item={i} />
            ))}

            <div className="cart-page__summary">
                <h3>Total: ${total.toFixed(2)}</h3>

                <Button onClick={() => dispatch({ type: 'CLEAR' })}>
                    Clear cart
                </Button>
            </div>
        </section>
    );
}
