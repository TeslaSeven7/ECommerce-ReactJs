import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../features/products';
import { togglePick } from '../features/products';
import { addOneToCart } from '../features/cart';
import React, { useEffect } from 'react';

export default function ProductsList() {
	const products = useSelector((state) => state.products);
	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	if (!products.items) {
		dispatch(getProductsList());
	}
	function addCart(el) {
		dispatch(addOneToCart(el.id));
	}
	useEffect(() => {}, [cartItems]);
	return (
		<div>
			<div className='px-6'>
				<h1 className='text-slate-100 text-2cl mb-6'>Here are our products</h1>
				<ul className='grid grid-cols-3 gap-4'>
					{products.items &&
						products.items.map((el) => (
							<li
								key={el.id}
								className='p-4 bg-slate-200 rounded'>
								<img
									className='mb-4'
									src={`/images/${el.img}.png`}
									alt={el.title}
								/>
								<div className='flex justify-between items-center mb-6'>
									<p className='text-slate-700 text-lg'>{el.title}</p>
									<p className='text-slate-900 font-bold'>{el.price}</p>
								</div>
								<button
									className={`${
										el.picked ? 'bg-green-700' : 'bg-slate-600'
									}  w-full text-slate-100 inline-flex items-center justify-center rounded p-2 mr-2`}
									onClick={() => addCart(el)}>
									{el.picked ? 'Item picked' : 'Add to cart'}
								</button>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}
