import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
};

export const cart = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		createCartItem: (state, action) => {
			state.cartItems.push(action.payload);
		},
	},
});
export function addOneToCart(action) {
	return function (dispatch, getState) {
		const storeState = getState();
		const isAlreadyPresent = storeState.cart.cartItems.find(
			(el) => el.id === action
		);
		if (!isAlreadyPresent) {
			const itemToAdd = storeState.products.items.find(
				(el) => el.id === action
			);
			const newCartItem = {
				...itemToAdd,
				quantity: 1,
			};
			dispatch(createCartItem(newCartItem));
		}
	};
}

export const { createCartItem } = cart.actions;
export default cart.reducer;
