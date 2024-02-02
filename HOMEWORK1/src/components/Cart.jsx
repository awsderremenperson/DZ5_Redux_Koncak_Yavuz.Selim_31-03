import React, { useContext } from 'react';
import { CartContext } from '../App';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product._id}>
                        <img src={product.picture} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
