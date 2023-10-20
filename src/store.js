import { configureStore } from '@reduxjs/toolkit';
import products from './features/products';
import cart from './features/cart';

export const store = configureStore({
	reducer: {
		products,
		cart,
	},
});
