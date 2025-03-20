import React from 'react';
import {useCart} from '../utils/CartContext';
import {Link, useNavigate} from "react-router-dom";

const Cart = () => {
	const navigate = useNavigate();
	const {cartItems, updateQuantity, clearCart, totalPrice} = useCart();

	if (cartItems.length === 0) {
		return (
			<div className="container mx-auto py-8 px-4 text-center">
				<h2 className="text-4xl text-gray-800 font-bold mb-4">КОРЗИНА</h2>
				<p className="text-gray-600 mb-6">Ваша корзина пуста.</p>
				<Link to="/" className="text-blue-600  underline">
					Вернуться на главную
				</Link>
			</div>
		);
	}

	return (
		<div className="mx-20 py-8 px-4">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-4xl font-bold text-gray-800">КОРЗИНА</h2>
				<button
					onClick={clearCart}
					className="text-gray-500 hover:text-gray-700 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg"
				>
					ОЧИСТИТЬ
				</button>
			</div>
			<div className="bg-white p-4 rounded-lg shadow">
				<div
					className="grid grid-cols-[150px_1fr_1fr_1fr_1fr] gap-4 font-semibold text-gray-700 border-b border-gray-300 pb-2">
					<div></div>
					<div className='text-left'>НАИМЕНОВАНИЕ</div>
					<div className="text-center">ЦЕНА</div>
					<div className="text-center">КОЛИЧЕСТВО</div>
					<div className="text-right">СУММА</div>
				</div>
				{cartItems.map((item) => (
					<div
						key={item.id}
						className="grid grid-cols-[150px_1fr_1fr_1fr_1fr] gap-4 items-center py-4 border-b border-gray-300"
					>
						<div className="flex items-center ">
							<img
								src={item.img}
								alt={item.model}
								className="w-16 h-16 object-contain mx-auto"
							/>
						</div>
						<div className="flex items-center">
							<div>
								<p className="font-bold">{item.name}</p>
								<p className="text-gray-600">{item.model}</p>
							</div>
						</div>
						<div className="text-center font-bold">{item.price}</div>
						<div className="flex justify-center items-center space-x-2">
							<button
								onClick={() => updateQuantity(item.id, item.quantity - 1)}
								className="bg-gray-200 px-2  rounded cursor-pointer hover:bg-red-100"
							>
								-
							</button>
							<span>{item.quantity}</span>
							<button
								onClick={() => updateQuantity(item.id, item.quantity + 1)}
								className="bg-gray-200 px-2 rounded cursor-pointer hover:bg-green-100"
							>
								+
							</button>
						</div>
						<div className="text-right font-bold">
							{(parseFloat(item.price) * item.quantity).toFixed(2)} РУБ.
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-end items-center mt-6">
				<div className="text-xl font-bold mr-4">
					ИТОГО: {totalPrice.toFixed(2)} РУБ.
				</div>
				<button
					onClick={() => navigate('/order')}
					className=" text-white px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 cursor-pointer transition-all duration-150"
				>
					ЗАКАЗАТЬ
				</button>
			</div>
		</div>
	);
};

export default Cart;