import products from '../../mock-data/product-data.json';
import { useContext } from 'react';
import { OrdersContext } from '../../contexts/order.context';
import './Products.styles.scss';

export default function Products() {
  const { addItemToOrder } = useContext(OrdersContext);

  return (
    <div className='products-container'>
      <h2>Products</h2>
      <div className='products-overview'>
        {products.map((product) => (
          <div
            key={product.id}
            className='product'
            onClick={() => addItemToOrder(product)}
          >
            {product.product_name}
          </div>
        ))}
      </div>
    </div>
  );
}
