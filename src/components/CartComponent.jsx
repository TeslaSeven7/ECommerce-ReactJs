import React from 'react';
import shoppingCart from '../assets/shopping-cart.svg';

export default function CartComponent() {
	return (
		<div className='px-4 flex justify-end items-center'>
			<button className='p-2 bg-slate-200 rounded'>
				<img
					className='w-6'
					src={shoppingCart}
					alt=''
				/>
			</button>
		</div>
	);
}
