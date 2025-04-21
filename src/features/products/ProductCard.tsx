import { memo } from 'react';
import { Product } from './types';
import { useCart } from '../cart/CartContext';
import { Button } from '../../app/shared/ui/Button';
import { Card } from '../../app/shared/ui/Card';

type Props = { product: Product };

const ProductCard = memo(({ product }: Props) => {
    const { dispatch } = useCart();

    return (
        <Card className="product">
            <img src={product.img} alt={product.title} className="product__img" />

            <h3 className="product__title">{product.title}</h3>
            <p className="product__price">${product.price.toFixed(2)}</p>

            <Button
                onClick={() => dispatch({ type: 'ADD', payload: product })}
                fullWidth
            >
                Add to cart
            </Button>
        </Card>
    );
});

export default ProductCard;
