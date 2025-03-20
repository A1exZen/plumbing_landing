import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../utils/CartContext';

const OrderForm = () => {
	const navigate = useNavigate();
	const { clearCart } = useCart();
	const [formData, setFormData] = useState({
		fullName: '',
		phone: '',
		email: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		clearCart();
		navigate('/thank-you');
	};

	return (
		<div className="container mx-auto pt-20 px-4 flex justify-center">
			<form
				onSubmit={handleSubmit}
				className=" w-full max-w-md"
			>
				<div className='bg-gradient-to-r from-blue-500 to-blue-400  pt-15 pb-10  rounded-3xl  transition-all duration-150 px-6 shadow-lg mb-6 '>
				<div className="mb-4 text-white flex flex-col gap-2 text-center">
					<label>Ф.И.О.</label>
					<input
						type="text"
						name="fullName"
						value={formData.fullName}
						onChange={handleChange}
						placeholder="Ф.И.О."
						className="w-full px-3 py-2 rounded bg-blue-200 text-gray-700 "
						required
					/>
				</div>
				<div className="mb-4 text-white flex flex-col gap-2 text-center">
					<label className='uppercase'>Номер телефона</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="номер телефона"
						className="w-full px-3 py-2 rounded bg-blue-200 text-gray-700 "
						required
					/>
				</div>
				<div className="mb-12 text-white flex flex-col gap-2 text-center">
					<label className='uppercase'>E-Mail</label>
					<input
						type="text"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="email"
						className="w-full px-3 py-2 rounded bg-blue-200 text-gray-700 "
						required
					/>
				</div>
				</div>
				<button
					type="submit"
					className="text-center w-full text-3xl text-gray-600 font-bold  py-3  hover:text-blue-800 cursor-pointer"
				>
					ОФОРМИТЬ ЗАКАЗ
				</button>
				<p className='uppercase text-center mt-2 text-gray-400'>наш менеджер вам перезвонит</p>
			</form>

		</div>
	);
};

export default OrderForm;