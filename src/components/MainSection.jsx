import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

// Animation variants for fading in and sliding up
const fadeInUp = {
	hidden: {opacity: 0, y: 50},
	visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: 'easeOut'}},
};

// Staggered animation for children (e.g., list items)
const staggerContainer = {
	hidden: {opacity: 0},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

// Animation for individual list items
const listItem = {
	hidden: {opacity: 0, x: -20},
	visible: {opacity: 1, x: 0, transition: {duration: 0.5}},
};

// Animation for cards (scale and fade)
const cardAnimation = {
	hidden: {opacity: 0, scale: 0.9},
	visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
};

const MainSection = () => {
	return (
		<main className="mx-auto mt-6">
			<div className="w-full">
				<motion.img
					src="/public/логотипы.png"
					alt="Poolspa Logo"
					className="mr-2 w-full"
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{duration: 1}}
				/>
			</div>
			<div className="container flex flex-col mx-auto px-5 lg:px-20">
				<section id="main"
				         className="flex flex-col items-start lg:max-w-[80%] my-30">
					<motion.h1
						className="text-4xl sm:text-6xl text-gray-700 font-bold mb-6 uppercase"
						variants={fadeInUp}
						initial="hidden"
						animate="visible"
					>
						Магазин сантехники и отопительных приборов
					</motion.h1>
					<motion.p
						className="text-xl sm:text-2xl text-gray-600 mb-6 uppercase"
						variants={fadeInUp}
						initial="hidden"
						animate="visible"
						transition={{delay: 0.2}}
					>
						Добро пожаловать в STROY MINSK - ваш надежный партнер в мире
						сантехники и отопительных приборов!
					</motion.p>
					<motion.p
						className="text-xl sm:text-2xl text-gray-600 mb-12 uppercase"
						variants={fadeInUp}
						initial="hidden"
						animate="visible"
						transition={{delay: 0.4}}
					>
						МЫ РАДЫ ПРЕДСТАВИТЬ ВАС НА НАШЕМ САЙТЕ, ГДЕ ВЫ НАЙДЕТЕ ВСЁ
						НЕОБХОДИМОЕ ДЛЯ КОМФОРТНОГО И НАДЁЖНОГО ОБУСТРОЙСТВА ВАШЕГО ДОМА ИЛИ
						ОФИСА.
					</motion.p>
					<motion.button
						className="text-blue-600 uppercase text-xl rounded-xl px-2 py-1 border border-blue-600 hover:cursor-pointer hover:bg-gray-100 transition-all duration-300"
						variants={fadeInUp}
						initial="hidden"
						animate="visible"
						transition={{delay: 0.6}}
						whileHover={{scale: 1.05, backgroundColor: '#f3f4f6'}}
						whileTap={{scale: 0.95}}
					>
						Подробнее
					</motion.button>
				</section>

				<section id="about" className="grid grid-cols-1 lg:grid-cols-2 mb-30">
					<div className="mr-10 lg:mb-0 mb-12">
						<motion.h2
							className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6"
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{once: true}}
						>
							О КОМПАНИИ
						</motion.h2>
						<motion.p
							className="text-gray-600 mb-12 max-w-2xl text-xl sm:text-2xl"
							variants={fadeInUp}
							initial="hidden"
							whileInView="visible"
							viewport={{once: true}}
							transition={{delay: 0.2}}
						>
							ДОБРО ПОЖАЛОВАТЬ В STROYMINSK – ВАШ НАДЕЖНЫЙ ПАРТНЕР В МИРЕ
							САНТЕХНИКИ И ОТОПИТЕЛЬНЫХ ПРИБОРОВ!
						</motion.p>
						<motion.div
							className="flex flex-col md:flex-row gap-8"
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{once: true}}
						>
							<ul className="space-y-6 text-gray-700 sm:mr-40">
								{[
									{
										icon: '/иконка%20-%20кран.png',
										text: 'ШИРОКИЙ ВЫБОР САНТЕХНИКИ И ОТОПИТЕЛЬНЫХ ПРИБОРОВ',
									},
									{
										icon: '/иконка%20-%20рука.png',
										text: 'СОТРУДНИЧАЕМ ТОЛЬКО С ПРОВЕРЕННЫМИ БРЕНДАМИ',
									},
									{
										icon: '/иконка%20-%20галочка.png',
										text: 'ГАРАНТИРУЕМ ВЫСОКОЕ КАЧЕСТВО И ДОЛГОВЕЧНОСТЬ НАШИХ ТОВАРОВ',
									},
								].map((item, idx) => (
									<motion.li
										key={idx}
										className="flex items-center gap-2"
										variants={listItem}
									>
										<img src={item.icon} className="text-blue-500 w-15"
										     alt={`icon-${idx}`}/>
										{item.text}
									</motion.li>
								))}
							</ul>
						</motion.div>
					</div>
					<div
						className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full auto-rows-fr">
						{[
							{
								title: 'САНТЕХНИКА',
								items: ['Ванны', 'Унитазы', 'Раковины', 'Смесители', 'Аксессуары', 'И многое другое'],
							},
							{
								title: 'ОТОПЛЕНИЕ',
								items: ['Радиаторы', 'Котлы', 'Трубы', 'Фитинги для отопления'],
							},
							{
								title: 'ВОДОНАГРЕВАТЕЛИ',
								items: ['Бойлеры', 'Проточные водонагреватели для любого типа помещений'],
							},
							{
								title: 'КАНАЛИЗАЦИЯ',
								items: ['Надежные системы и комплектующие для вашего водопровода и канализации'],
							},
						].map((category, index) => (
							<motion.div
								key={index}
								className="bg-gray-200 p-4 rounded-lg shadow flex flex-col h-full"
								variants={cardAnimation}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
								whileHover={{scale: 1.03, transition: {duration: 0.3}}}
							>
								<h3
									className="font-bold text-lg text-gray-800 underline">{category.title}</h3>
								<ul
									className="text-gray-800 text-sm list-disc list-inside mt-2 uppercase grow">
									{category.items.map((item, idx) => (
										<li key={idx}>{item}</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</section>

				<section id="products" className="px-4 mb-30">
					<motion.h2
						className="text-3xl sm:text-5xl font-bold text-gray-800 mb-12"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{once: true}}
					>
						ПРОДУКЦИЯ
					</motion.h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								title: 'САНТЕХНИКА',
								items: ['Ванны', 'Унитазы', 'Раковины', 'Смесители', 'Аксессуары', 'И многое другое'],
							},
							{
								title: 'ОТОПЛЕНИЕ',
								items: ['Радиаторы', 'Котлы', 'Трубы', 'Фитинги для отопления'],
							},
							{
								title: 'ВОДОНАГРЕВАТЕЛИ',
								items: ['Бойлеры', 'Проточные водонагреватели для любого типа помещений'],
							},
							{
								title: 'КАНАЛИЗАЦИЯ',
								items: ['Надежные системы и комплектующие для вашего водопровода и канализации'],
							},
						].map((category, index) => (
							<motion.div
								key={index}
								className="p-4 flex flex-col h-full"
								variants={cardAnimation}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
								whileHover={{scale: 1.03, transition: {duration: 0.3}}}
							>
								<h3
									className="font-bold text-lg text-gray-800 underline">{category.title}</h3>
								<ul
									className="text-gray-700 text-md list-disc list-inside mt-2 grow uppercase">
									{category.items.map((item, idx) => (

										item === "Смесители" ? (
											<li key={idx}><a href='#smesiteli'>{item}</a></li>
										) : (
											<li key={idx}>{item}</li>
										)


									))}
								</ul>
							</motion.div>
						))}
					</div>
				</section>

				<section id="smesiteli" className="py-10 px-4">
					<motion.h2
						className="text-3xl sm:text-5xl font-bold text-gray-800 mb-12"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{once: true}}
					>
						СМЕСИТЕЛИ
					</motion.h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{[
							{
								id: 1,
								img: '/кран-1.png',
								name: 'СМЕСИТЕЛЬ ДЛЯ УМЫВАЛЬНИКА',
								model: 'Ledeme L1080',
								price: '100 РУБ.',
							},
							{
								id: 2,
								img: '/кран-2.png',
								name: 'СМЕСИТЕЛЬ ДЛЯ УМЫВАЛЬНИКА',
								model: 'Ledeme L1280',
								price: '230 РУБ.',
							},
							{
								id: 3,
								img: '/кран-3.png',
								name: 'СМЕСИТЕЛЬ ДЛЯ УМЫВАЛЬНИКА',
								model: 'Ledeme L1087',
								price: '120 РУБ.',
							},
							{
								id: 4,
								img: '/кран-4.png',
								name: 'Смеситель для кухни',
								model: 'LEDEME L74998A-4',
								price: '100 РУБ.',
							},
							{
								id: 5,
								img: '/кран-5.png',
								name: 'Смеситель для кухни',
								model: 'LEDEME L4798D-12',
								price: '230 РУБ.',
							},
							{
								id: 6,
								img: '/кран-6.png',
								name: 'Смеситель для кухни',
								model: 'Ledeme L4998-3',
								price: '120 РУБ.',
							},
						].map((product, index) => (
							<motion.div
								key={index}
								className="p-4 text-center flex flex-col items-center"
								variants={cardAnimation}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
								whileHover={{scale: 1.05, transition: {duration: 0.3}}}
							>
								<Link to={`/product/${product.id}`}>
									<img
										src={product.img}
										alt={product.name}
										className=" h-40 object-contain mb-4 flex justify-center w-full"
									/>
									<p
										className="text-gray-800 font-bold underline uppercase">{product.name}</p>
									<p
										className="text-gray-600 text-sm uppercase mb-2">{product.model}</p>
									<span
										className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg mt-2 font-bold">
                    {product.price}
                  </span>
								</Link>
							</motion.div>
						))}
					</div>
				</section>
			</div>
			<footer
				className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-4">
				<motion.p
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					transition={{duration: 1}}
					viewport={{once: true}}
				>
					ЧТУП "Наша Сантехника"
				</motion.p>
			</footer>
		</main>
	);
};

export default MainSection;