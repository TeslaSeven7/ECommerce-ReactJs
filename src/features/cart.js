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
			console.log(state.cartItems[0]);
		},
		deleteCartItem: (state, action) => {
			state.cartItems.splice(action.payload, 1);
		},
		changeQuantityCartItem: (state, action) => {
			const itemToAdd = state.cartItems.find(
				(el) => el.id === action.payload.el.id
			);
			const newQuantity = itemToAdd.quantity + action.payload.sign;
			itemToAdd.quantity = newQuantity;
			if (itemToAdd.quantity <= 0) {
				for (let i = 0; i < state.cartItems.length; i++) {
					if (state.cartItems[i].id === action.payload.el.id) {
						state.cartItems.splice(i, 1);
					}
				}
				const newCartArray = state.cartItems;
				const newArr = newCartArray.filter((cart) => cart.id != itemToAdd.id);
			}
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
				picked: true,
			};
			dispatch(createCartItem(newCartItem));
		} else {
			dispatch(deleteCartItem([itemToAdd]));
		}
	};
}

export const { createCartItem, deleteCartItem, changeQuantityCartItem } =
	cart.actions;
export default cart.reducer;
