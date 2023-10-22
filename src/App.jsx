import ProductsList from './components/ProductsList';
import CartComponent from './components/CartComponent';
function App() {
	return (
		<>
			<div className='min-h-screen bg-slate-800'>
				<div className='max-w-4xl mx-auto pt-14'>
					<CartComponent />

					<ProductsList />
				</div>
			</div>
		</>
	);
}

export default App;
