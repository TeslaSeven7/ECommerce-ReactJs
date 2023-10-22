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
		deleteCartItem: (state, action) => {
			state.cartItems.splice(action.payload, 1);
		},
	},
});
export function addOneToCart(action) {
	return function (dispatch, getState) {
		const storeState = getState();
		const isAlreadyPresent = storeState.cart.cartItems.find(
			(el) => el.id === action
		);
		const itemToAdd = storeState.products.items.find((el) => el.id === action);
		if (!isAlreadyPresent) {
			const newCartItem = {
				...itemToAdd,
				quantity: 1,
			};
			dispatch(createCartItem(newCartItem));
		} else {
			dispatch(deleteCartItem([itemToAdd]));
		}
	};
}

export const { createCartItem, deleteCartItem } = cart.actions;
export default cart.reducer;
