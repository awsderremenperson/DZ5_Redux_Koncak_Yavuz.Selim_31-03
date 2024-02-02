import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './data/products.json';

export const CartContext = createContext();

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <Router>
            <CartContext.Provider value={{ cart, addToCart }}>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/cart">Cart ({cart.length})</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<ProductList products={products} />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </CartContext.Provider>
        </Router>
    );
}

export default App;