import { ChangeEvent } from 'react';
import { CartItem as Item } from './cartReducer';
import { useCart } from './CartContext';
import { Button } from '../../app/shared/ui/Button';  // path fixed
import { Card } from '../../app/shared/ui/Card';

type Props = { item: Item };

export default function CartItem({ item }: Props) {
    const { dispatch } = useCart();

    const handleQty = (e: ChangeEvent<HTMLInputElement>) =>
        dispatch({
            type: 'CHANGE_QTY',
            payload: { id: item.id, qty: +e.target.value },
        });

    return (
        <Card className="cart-item">
            <img src={item.img} alt={item.title} className="cart-item__img" />

            <div className="cart-item__info">
                <h4>{item.title}</h4>
                <p>${(item.price * item.qty).toFixed(2)}</p>

                <div className="cart-item__controls">
                    <input
                        type="number"
                        min={1}
                        value={item.qty}
                        onChange={handleQty}
                    />

                    <Button
                        onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}
                        aria-label="Remove item"
                    >
                        ×
                    </Button>
                </div>
            </div>
        </Card>
    );
}
