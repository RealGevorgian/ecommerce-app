import ProductCard from './ProductCard';
import { mockProducts } from './mockProducts';
import './ProductsPage.css';


export default function ProductsPage() {
    return (
        <section className="products-page">
            <h1 className="products-page__title">Products</h1>

            <div className="products-page__grid">
                {mockProducts.map(p => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
}
