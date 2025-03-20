
import {useCart} from "../utils/CartContext.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";

const products = [
	{
		id: 1,
		img: "/кран-1.png",
		name: "СМЕСИТЕЛЬ ДЛЯ УМЫВАЛЬНИКА",
		model: "Ledeme L1080",
		price: "100 РУБ.",
		article: "L1080",
	},
	{
		id: 2,
		img: "/кран-2.png",
		name: "СМЕСИТЕЛЬ ДЛЯ УМЫВАЛЬНИКА",
		model: "Ledeme L1280",
		price: "230 РУБ.",
		article: "L1280",
	},
	{
		id: 3,
		img: "/кран-3.png",
		name: "СМЕСИТЕЛЬ ДЛЯ УМЫВАЛЬНИКА",
		model: "Ledeme L1087",
		price: "120 РУБ.",
		article: "L1087",
	},
	{
		id: 4,
		img: "/кран-4.png",
		name: "Смеситель для кухни ",
		model: "LEDEME L74998A-4",
		price: "100 РУБ.",
		article: "L74998A-4",
	},
	{
		id: 5,
		img: "/кран-5.png",
		name: "Смеситель для кухни",
		model: "LEDEME L4798D-12",
		price: "230 РУБ.",
		article: "L4798D-12",
	},
	{
		id: 6,
		img: "/кран-6.png",
		name: "Смеситель для кухни",
		model: "Ledeme L4998-3",
		price: "120 РУБ.",
		article: "L4998-3",
	},
];

const characteristics = {
	color: "Хром",
	material: "Латунь",
	bodyType: "Однорычажный",
	spout: "Фиксированный",
	diameter: "35 мм",
	country: "Китай",
};

const ProductPage = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	const { addToCart } = useCart();
	const product = products.find((p) => p.id.toString() === id);

	if (!product) {
		return <h2 className="text-center text-red-500">Товар не найден</h2>;
	}

	const handleAddToCart = () => {
		addToCart(product);
		navigate('/cart');
	};

	return (
		<div className=" p-4 flex flex-col xl:flex-row gap-15 my-15 xl:mx-20">
			<img src={product.img} alt={product.model}
			     className="w-100 object-contain mt-10 "/>
			<div className='mt-12'>
				<h1
					className="text-5xl text-gray-700 font-bold">{product.name} {product.model}</h1>
				<div className="grid grid-cols-1 lg:grid-cols-3  mt-12">
					<div className="lg:mb-0 mb-12">
						<p className="text-gray-700 uppercase text-xl">Артикул: <span
							className='font-bold'>{product.article}</span></p>
						<p
							className="text-4xl font-black text-gray-800 lg:mt-20 mt-10">{product.price}</p>
						<button
							onClick={handleAddToCart}
							className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 mt-6 rounded-xl hover:from-blue-700 hover:to-blue-500 cursor-pointer transition-all duration-150 ">
							В КОРЗИНУ
						</button>
					</div>
					<div className='col-span-2'>
						<h2
							className="text-gray-700 uppercase text-xl  font-bold">Характеристики</h2>
						<div className="flex gap-30  mt-6">
							<div className="text-gray-700 uppercase">
								<p>Цвет: </p>
								<p>Материал: </p>
								<p>Тип корпуса: </p>
								<p>Излив: </p>
								<p>Диаметр: </p>
								<p>Страна производитель: </p>
							</div>
							<div className="text-gray-900 font-semibold uppercase">
								<p>{characteristics.color}</p>
								<p>{characteristics.material}</p>
								<p> {characteristics.bodyType}</p>
								<p>{characteristics.spout}</p>
								<p>{characteristics.diameter}</p>
								<p>{characteristics.country}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-20'>	<Link to='/calculator' className=' text-blue-600 underline font-semibold  w-full cursor-pointer'>РАССЧИТАТЬ ПРИМЕРНУЮ СТОИМОСТЬ ДОСТАВКИ</Link></div>
			</div>
		</div>
	);
};

export default ProductPage;
