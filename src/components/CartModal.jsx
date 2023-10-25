import { useDispatch, useSelector } from 'react-redux';
import Plus from '../assets/add.svg';
import Moins from '../assets/minus.svg';
import { changeQuantityCartItem } from '../features/cart';
export default function CartModal(props) {
	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<div className='fixed inset-0 bg-slate-700/75 flex items-center justify-center'>
			<div className='bg-white w-1/2 p-4 rounded relative'>
				<button
					onClick={props.closeModal}
					className='absolute top-2 right-2 bg-red-500 text-white w-7 h-7 flex items-center justify-center rounded'>
					X
				</button>
				<h2 className='text-3xl font-medium text-center my-5'>My cart</h2>
				{cartItems.cartItems.length != 0 ? (
					cartItems.cartItems.map((el) => (
						<div className='flex justify-between mb-5 bg-slate-200 p-2'>
							<div className='flex'>
								<div className=' flex items-center'>
									<img
										className='w-10 me-3'
										src={`/images/${el.img}.png`}
										alt=''
									/>
									<p className='text-xl'>{el.title}</p>
								</div>
							</div>
							<div className='flex items-center'>
								<p className='me-5 p-2 rounded bg-white'>{el.price}</p>
								<div className='flex items-center justify-center me-5'>
									<button
										className='w-7 h-7 bg-slate-500 p-2 rounded'
										onClick={() =>
											dispatch(
												changeQuantityCartItem({
													el: el,
													sign: -1,
													qt: el.quantity - 1,
												})
											)
										}>
										<img
											src={Moins}
											alt=''
										/>
									</button>
									<p className='px-3'>{el.quantity}</p>
									<button
										className='w-7 h-7 bg-slate-500 p-2 rounded'
										onClick={() =>
											dispatch(
												changeQuantityCartItem({
													el: el,
													sign: +1,
													qt: el.quantity + 1,
												})
											)
										}>
										<img
											src={Plus}
											alt=''
										/>
									</button>
								</div>
								<button className='w-7 h-7 flex items-center justify-center text-sm rounded border border-slate-400 text-slate-500'>
									X
								</button>
							</div>
						</div>
					))
				) : (
					<p>Your cart is empty!</p>
				)}
			</div>
		</div>
	);
}
