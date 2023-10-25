import ProductsList from './components/ProductsList';
import { useState } from 'react';
import shoppingCart from './assets/shopping-cart.svg';
import { createPortal } from 'react-dom';
import CartModal from './components/CartModal';
function App() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className='min-h-screen bg-slate-800'>
				<div
					className='relative max-w-4xl mx-auto pt-14'
					id='container'>
					<div className='px-4 flex justify-end items-center'>
						<button
							onClick={() => setShowModal(!showModal)}
							className='p-2 bg-slate-200 rounded flex'>
							<img
								className='w-6 me-2'
								src={shoppingCart}
								alt=''
							/>
							<span>View Your </span>
						</button>
					</div>

					<ProductsList />
				</div>
			</div>
			{showModal &&
				createPortal(
					<CartModal closeModal={() => setShowModal(!showModal)} />,
					document.getElementById('container')
				)}
		</>
	);
}

export default App;
