import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
	return (
		<div className="container mx-auto py-8 px-4 text-center mt-40">
			<h2 className="text-5xl text-gray-800 font-bold mb-4">СПАСИБО ЗА ЗАКАЗ!</h2>
			<p className="text-xl text-gray-600 mb-6">НАШ МЕНЕДЖЕР ВАМ ПЕРЕЗВОНИТ</p>
			<Link to="/" className="text-blue-600 hover:underline">
				Вернуться на главную
			</Link>
		</div>
	);
};

export default ThankYou;