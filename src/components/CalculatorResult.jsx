import React from 'react';
import {useLocation, Link} from 'react-router-dom';

const CalculatorResult = () => {
	const location = useLocation();
	const {cost, deliveryTime} = location.state || {cost: '0', deliveryTime: 0};

	return (
		<div className="container mx-auto py-8 px-4 text-center">
			<h2 className="text-5xl text-gray-700 font-bold mb-15 mt-10">РАСЧЕТ
				ВЫПОЛНЕН!</h2>
			<div
				className="grid md:grid-cols-2 grid-cols-1 justify-center gap-x-10 gap-y-5 mb-15 max-w-2xl mx-auto  ">
				<div>
					<p className="text-gray-600 px-5">СТОИМОСТЬ ДОСТАВКИ ВАШЕГО
						ЗАКАЗА СОСТАВИТ</p>
				</div>
				<div>
					<p className="text-gray-600 px-5 ">МЫ СМОЖЕМ ДОСТАВИТЬ ВАШ ЗАКАЗ ЗА</p>
				</div>
				<div
					className="rounded-xl w-[80%] mx-auto  bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 text-3xl font-bold">
					{cost} РУБ.
				</div>

				<div
					className=" rounded-xl w-[80%] mx-auto  bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3  text-3xl font-bold">
					{deliveryTime} {deliveryTime === 1 ? 'ДЕНЬ' : 'ДНЯ'}
				</div>
			</div>
			<p className="text-gray-600 mb-6 max-w-6xl mx-auto  uppercase">
				<div className='font-bold text-gray-800'>Внимание!</div>
				Эта стоимость является предварительной и рассчитана на основе
				предоставленных данных. Фактическая стоимость может измениться.
				Спасибо за понимание!
			</p>
			<Link to="/calculator" className="text-blue-600 hover:underline">
				Рассчитать заново
			</Link>
		</div>
	);
};

export default CalculatorResult;