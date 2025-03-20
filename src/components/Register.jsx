import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Register = () => {
	const navigate = useNavigate();
	const { register } = useAuth();
	const [formData, setFormData] = useState({
		login: '',
		password: '',
	});
	const [error, setError] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		// Simple validation
		if (!formData.login || !formData.password) {
			setError('Пожалуйста, заполните все поля.');
			return;
		}

		try {
			// Register the user
			await register(formData.login, formData.password);
			navigate('/'); // Redirect to homepage after registration
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className="container mx-auto px-4 flex flex-col items-center justify-center h-screen">
			<Link to="/">
				<img alt="logo" src="/лого%20-%20большой%20синий.png" className="mb-8 w-40" />
			</Link>
			<form onSubmit={handleSubmit} className="w-full max-w-md">
				<div className="bg-gradient-to-r from-blue-500 to-blue-400 py-15 rounded-3xl transition-all duration-150 px-6 shadow-lg mb-6">
					<div className="mb-10 text-white flex flex-col gap-2 text-center">
						<label>ЛОГИН</label>
						<input
							type="text"
							name="login"
							value={formData.login}
							onChange={handleChange}
							placeholder="email/номер телефона"
							className="w-full px-3 py-2 rounded bg-blue-200 text-gray-700"
							required
						/>
					</div>
					<div className="mb-4 text-white flex flex-col gap-2 text-center">
						<label className="uppercase">Пароль</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="пароль"
							className="w-full px-3 py-2 rounded bg-blue-200 text-gray-700"
							required
						/>
					</div>
				</div>
				{error && <p className="text-red-500 text-center mb-4">{error}</p>}
				<button
					type="submit"
					className="text-center w-full text-3xl text-gray-600 font-bold py-3 uppercase hover:text-blue-800 cursor-pointer"
				>
					Зарегистрироваться
				</button>
				<div className="w-full text-center">
					<Link to="/login" className="uppercase text-center mt-2 text-gray-400 hover:text-gray-600">
						У меня уже есть аккаунт
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;