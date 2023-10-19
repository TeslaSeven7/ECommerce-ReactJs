import { useSelector, useDispatch } from 'react-redux';
import { getProductList } from '../features/products';
export default function ProductsList() {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();
	if (!products.items) {
		dispatch(getProductList());
	}
	console.log(products);

	return <div>ProductsList</div>;
}
