import React from "react";

const ProductShowcase = () => {
	return (
		<section className='container mx-auto py-8 px-4 bg-gray-200'>
			<h2 className='text-3xl font-bold text-center mb-6'>СМЕСИТЕЛИ</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				<div className='bg-white p-4 rounded-lg shadow text-center'>
					<img
						src='https://via.placeholder.com/200'
						alt='Mixer 1'
						className='mx-auto mb-2'
					/>
					<p>Смеситель для умывальника LEDEME L1080</p>
					<p className='text-green-600 font-bold'>100 руб.</p>
				</div>
				<div className='bg-white p-4 rounded-lg shadow text-center'>
					<img
						src='https://via.placeholder.com/200'
						alt='Mixer 2'
						className='mx-auto mb-2'
					/>
					<p>Смеситель для умывальника LEDEME L1280</p>
					<p className='text-green-600 font-bold'>230 руб.</p>
				</div>
				<div className='bg-white p-4 rounded-lg shadow text-center'>
					<img
						src='https://via.placeholder.com/200'
						alt='Mixer 3'
						className='mx-auto mb-2'
					/>
					<p>Смеситель для умывальника LEDEME L1087</p>
					<p className='text-green-600 font-bold'>120 руб.</p>
				</div>
			</div>
		</section>
	);
};

export default ProductShowcase;
