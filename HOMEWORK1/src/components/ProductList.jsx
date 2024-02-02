 import React, { useContext } from 'react';
import { CartContext } from '../App';

const ProductList = ({ products }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <img src={product.picture} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
