import React, {createContext, useContext, useEffect, useState} from 'react';
import {useAuth} from "./AuthContext.jsx";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			const storedCart = localStorage.getItem(`cart_${user.login}`);
			if (storedCart) {
				setCartItems(JSON.parse(storedCart));
			} else {
				setCartItems([]);
			}
		} else {
			setCartItems([]);
		}
	}, [user]);

	useEffect(() => {
		if (user) {
			localStorage.setItem(`cart_${user.login}`, JSON.stringify(cartItems));
		}
	}, [cartItems, user]);

	const addToCart = (product) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === product.id);
			if (existingItem) {
				return prevItems.map((item) =>
					item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
				);
			}
			return [...prevItems, { ...product, quantity: 1 }];
		});
	};

	const removeFromCart = (id) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	const updateQuantity = (id, quantity) => {
		if (quantity <= 0) {
			removeFromCart(id);
		} else {
			setCartItems((prevItems) =>
				prevItems.map((item) =>
					item.id === id ? { ...item, quantity } : item
				)
			);
		}
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const totalPrice = cartItems.reduce(
		(total, item) => total + parseFloat(item.price) * item.quantity,
		0
	);

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);