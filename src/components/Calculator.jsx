import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Calculator = () => {
	const navigate = useNavigate();

	const [location, setLocation] = useState('Минск');
	const [weight, setWeight] = useState('');
	const [length, setLength] = useState('');
	const [width, setWidth] = useState('');
	const [height, setHeight] = useState('');
	const [quantity, setQuantity] = useState('');
	const [tariff, setTariff] = useState('standard'); // 'standard' or 'express'

	const locations = ['Минск', 'Гомель', 'Гродно', 'Витебск', 'Могилёв', 'Брест'];

	const deliveryTimes = {
		Минск: 1,
		Могилёв: 2,
		Гродно: 2,
		Витебск: 3,
		Гомель: 4,
		Брест: 4,
	};

	const tariffRates = {
		standard: 0.5,
		express: 1.0,
	};

	const handleCalculate = (e) => {
		e.preventDefault();

		if (!weight || !length || !width || !height || !quantity) {
			alert('Пожалуйста, заполните все поля.');
			return;
		}

		const wt = parseFloat(weight);
		const l = parseFloat(length);
		const w = parseFloat(width);
		const h = parseFloat(height);
		const q = parseInt(quantity);

		if (wt <= 0 || l <= 0 || w <= 0 || h <= 0 || q <= 0) {
			alert('Все значения должны быть больше 0.');
			return;
		}

		const volumeWeight = (l * w * h * q * wt) / 5000;
		const calculatedCost = volumeWeight * tariffRates[tariff];

		const deliveryTime = deliveryTimes[location];

		navigate('/calculator-result', {
			state: {
				cost: calculatedCost.toFixed(2),
				deliveryTime,
			},
		});
	};

	return (
		<div className="container mx-auto py-8 px-4 ">
			<h2 className="text-5xl font-bold text-center mb-8">КАЛЬКУЛЯТОР</h2>
			<form onSubmit={handleCalculate} className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">

				<div className="mb-6">
					<label className="text-lg block text-gray-700 text-center font-bold mb-2">МЕСТОПОЛОЖЕНИЕ <div className='text-sm uppercase font-semibold text-gray-400'>Город доставки</div></label>
					<select
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-700"
					>
						{locations.map((loc) => (
							<option key={loc} value={loc}>
								{loc}
							</option>
						))}
					</select>
				</div>

				{/* Product Parameters */}
				<div className="mb-6">
					<h3 className="text-lg font-bold text-gray-700 text-center mb-2">ПАРАМЕТРЫ ТОВАРА</h3>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-10">
						<div>
							<label className="block  text-gray-600 mb-1">ВЕС (КГ)</label>
							<input
								type="number"
								value={weight}
								onChange={(e) => setWeight(e.target.value)}
								className="w-full p-2 border rounded bg-gray-100 text-gray-700"
								placeholder="0"
								min="0"
								step="0.1"
								required
							/>
						</div>
						<div>
							<label className="block text-gray-600 mb-1">ДЛИНА (СМ)</label>
							<input
								type="number"
								value={length}
								onChange={(e) => setLength(e.target.value)}
								className="w-full p-2 border rounded bg-gray-100 text-gray-700"
								placeholder="0"
								min="0"
								step="0.1"
								required
							/>
						</div>
						<div>
							<label className="block text-gray-600 mb-1">ШИРИНА (СМ)</label>
							<input
								type="number"
								value={width}
								onChange={(e) => setWidth(e.target.value)}
								className="w-full p-2 border rounded bg-gray-100 text-gray-700"
								placeholder="0"
								min="0"
								step="0.1"
								required
							/>
						</div>
						<div>
							<label className="block text-gray-600 mb-1">ВЫСОТА (СМ)</label>
							<input
								type="number"
								value={height}
								onChange={(e) => setHeight(e.target.value)}
								className="w-full p-2 border rounded bg-gray-100 text-gray-700"
								placeholder="0"
								min="0"
								step="0.1"
								required
							/>
						</div>
						<div>
							<label className="block text-gray-600 mb-1">ШТУК</label>
							<input
								type="number"
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
								className="w-full p-2 border rounded bg-gray-100 text-gray-700"
								placeholder="0"
								min="0"
								step="1"
								required
							/>
						</div>
					</div>
				</div>

				{/* Tariff Selection */}
				<div className="mb-12">
					<h3 className="text-lg font-bold text-center text-gray-700 mb-2">ВЫБОР ТАРИФА</h3>
					<div className="flex space-x-4  justify-center">
						<label className="flex items-center">
							<input
								type="radio"
								name="tariff"
								value="standard"
								checked={tariff === 'standard'}
								onChange={() => setTariff('standard')}
								className="mr-2"
							/>
							СТАНДАРТНАЯ ДОСТАВКА
						</label>
						<label className="flex items-center">
							<input
								type="radio"
								name="tariff"
								value="express"
								checked={tariff === 'express'}
								onChange={() => setTariff('express')}
								className="mr-2"
							/>
							ЭКСПРЕСС-ДОСТАВКА
						</label>
					</div>
				</div>

				{/* Calculate Button */}
				<div className='flex justify-center w-full' >
				<button
					type="submit"
					className="px-5  text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-500 cursor-pointer transition-all duration-150 bg-gradient-to-r from-blue-600 to-blue-400"
				>
					РАССЧИТАТЬ
				</button>
				</div>
			</form>
		</div>
	);
};

export default Calculator;