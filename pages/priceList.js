import React, { useState } from 'react';

export default function PriceList() {
	const allPriceList = [
		{
			listCategory: 'Basic',
			listCost: 'Free',
			listDesc: 'Get started with the basic plan',
			listPerks: ['1 User', '2 Projects', '5GB Storage'],
			listStart: 'Start Free Plan',
		},
		{
			listCategory: 'Pro',
			listCost: '$7',
			listDesc: 'Get more advanced',
			listPerks: [
				'3 Users',
				'5 Projects',
				'10GB Storage',
				'Custom Domain',
			],
			listStart: 'Start Pro Trial',
		},
		{
			listCategory: 'Business',
			listCost: '$24',
			listDesc: 'For big business',
			listPerks: [
				'Unlimited Users',
				'Unlimited Projects',
				'100GB Storage',
				'Custom Domain',
				'Analysis Tools',
			],
			listStart: 'Start Business Trial',
		},
	];
	const [priceList, setPriceList] = useState(allPriceList);
	console.log('get price list =>', priceList);
	return (
		<div className='container mx-auto px-4 bg-black h-auto md:h-screen pt-4 pb-4'>
			<div>
				<h2 className='text-white text-center text-2xl md:mt-4'>
					Pricing
				</h2>
				<p className='text-white text-center text-xs mt-2 md:mt-8'>
					Choose the right pricing for you and get started working on
					your project
				</p>
			</div>
			<div className='grid grid-cols-1 md:flex md:justify-center md:px-72 md:mt-8'>
				{priceList.map(
					(
						{
							listCategory,
							listCost,
							listDesc,
							listPerks,
							listStart,
						},
						idx
					) => {
						if (listCategory === 'Basic') {
							return (
								<div
									key={listCategory}
									className='grid grid-cols-1 rounded-lg h-80 mt-4 w-52 bg-cyan-500 pl-4 mx-auto transition ease-in-out duration-300 hover:scale-110'>
									<h2 className='text-black text-xs mt-4 font-semibold'>
										{listCategory}
									</h2>
									<h1 className='text-black text-3xl -mt-12'>
										{listCost}
									</h1>
									<p className='text-black text-xs -mt-14'>
										{listDesc}
									</p>
									<ul className='text-black -mt-20'>
										{listPerks.map((item, idx) => (
											<div
												key={idx}
												className='flex mt-1'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-4 w-4'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fillRule='evenodd'
														d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
														clipRule='evenodd'
													/>
												</svg>
												<li className='ml-1 text-xs mt-0'>
													{item}
												</li>
											</div>
										))}
									</ul>
									<button
										type='button'
										className='text-xs bg-black text-white rounded-lg w-40 h-10 -mb-9 ml-1.5'>
										{listStart}
									</button>
								</div>
							);
						} else if (listCategory === 'Pro') {
							return (
								<div
									key={listCategory}
									className='grid grid-cols-1 rounded-lg h-80 mt-4 w-52 bg-yellow-400 pl-4 mx-auto transition ease-in-out duration-300 hover:scale-110'>
									<h2 className='text-black text-xs mt-4 font-semibold'>
										{listCategory}
									</h2>
									<h1 className='text-black text-3xl -mt-10'>
										{listCost}
									</h1>
									<p className='text-black text-xs -mt-9'>
										{listDesc}
									</p>
									<ul className='text-black -mt-12'>
										{listPerks.map((item, idx) => (
											<div
												key={idx}
												className='flex mt-1'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-4 w-4 mb-0.5'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fillRule='evenodd'
														d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
														clipRule='evenodd'
													/>
												</svg>
												<li className='ml-1 text-xs mt-0.5'>
													{item}
												</li>
											</div>
										))}
									</ul>
									<button
										type='button'
										className='text-xs bg-black text-white rounded-lg w-40 h-10 -mb-6 ml-1.5'>
										{listStart}
									</button>
								</div>
							);
						} else {
							return (
								<div
									key={listCategory}
									className='grid grid-cols-1 rounded-lg h-80 mt-4 w-52 bg-orange-400 pl-4 mx-auto transition ease-in-out duration-300 hover:scale-110'>
									<h2 className='text-black text-xs mt-4 font-semibold'>
										{listCategory}
									</h2>
									<h1 className='text-black text-3xl -mt-6'>
										{listCost}
									</h1>
									<p className='text-black text-xs -mt-4'>
										{listDesc}
									</p>
									<ul className='text-black -mt-4'>
										{listPerks.map((item, idx) => (
											<div
												key={idx}
												className='flex mt-1'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-4 w-4 mb-0.5'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fillRule='evenodd'
														d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
														clipRule='evenodd'
													/>
												</svg>
												<li className='ml-1 text-xs'>
													{item}
												</li>
											</div>
										))}
									</ul>
									<button
										type='button'
										className='text-xs bg-black text-white rounded-lg w-40 h-10 -mb-2 ml-1.5'>
										{listStart}
									</button>
								</div>
							);
						}
					}
				)}
			</div>
		</div>
	);
}
