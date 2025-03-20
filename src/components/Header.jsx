import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useCart} from "../utils/CartContext.jsx";
import {useAuth} from "../utils/AuthContext.jsx";


const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const {cartItems} = useCart();
	const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
	const {user, logout} = useAuth();

	const isSpecialPage = ['/order', '/thank-you'].includes(location.pathname);
	const noHeader = ['/login', '/register'].includes(location.pathname);

	const scrollToSection = (sectionId) => {
		if (location.pathname === '/') {
			const section = document.getElementById(sectionId);
			if (section) {
				const offset =
					section.getBoundingClientRect().top +
					window.scrollY -
					window.innerHeight / 2 +
					section.offsetHeight / 2;
				window.scrollTo({top: offset, behavior: 'smooth'});
			}
		} else {
			navigate('/', {state: {scrollTo: sectionId}});
		}
	};

	if (noHeader) {
		return null;
	}

	return (

		<header
			className={` text-white p-4 flex justify-between items-center px-20 ${isSpecialPage ? 'bg-white' : 'bg-gradient-to-r from-blue-600 to-blue-400'}`}>
			{isSpecialPage ? (
				<Link to='/'><img src='/лого%20-%20синий.png' alt='Logo'
				                  className='w-13'/></Link>
			) : (
				<Link to='/'><img src='/лого - белый.png' alt='Logo'
				                  className='w-13'/></Link>
			)
			}


			<nav className='flex items-center gap-10'>
				{
					isSpecialPage ? (
						<></>
					) : (
						<>
							<Link to='/calculator' className='hover:underline'>
								Калькулятор
							</Link>
							<Link to='/' className='hover:underline'>
								Главная
							</Link>
							<button onClick={() => scrollToSection("about")}
							        className="hover:underline cursor-pointer">
								О компании
							</button>
							<button onClick={() => scrollToSection("products")}
							        className="hover:underline cursor-pointer">
								Продукция
							</button>
						</>
					)
				}

			</nav>
			<div className="flex space-x-4">
				{
					user ? (
						<button
							className="text-white px-3 py-1 rounded hover:bg-gray-500/40 cursor-pointer" onClick={logout}>Выйти</button>
					) : (
						<Link to="/login"
						      className="text-black px-1 py-1 rounded-full hover:bg-gray-500/40">
							{isSpecialPage ? (
								<img src="/иконка%20-%20вход%20(синий).png"
								     alt="profile"
								     className="w-7"/>
							) : (
								<img src="/иконка - вход.png" alt="profile"
								     className="w-7"/>
							)
							}
						</Link>
					)
				}

				<Link to="/cart"
				      className="text-black px-1 py-1 rounded-full hover:bg-gray-500/40">

					{isSpecialPage ? (
						<img
							src="/иконка%20-%20корзина%20(синий).png"
							alt="cart"
							className="w-7"
						/>
					) : (
						<img
							src="/иконка - корзина.png"
							alt="cart"
							className="w-7"
						/>
					)
					}
					{cartItemCount > 0 && (
						<span
							className="absolute top-2 right-18 bg-blue-800 text-white rounded-full px-2 py-1 text-xs">
              {cartItemCount}
            </span>
					)}
				</Link>
			</div>
		</header>


	);
};

export default Header;
