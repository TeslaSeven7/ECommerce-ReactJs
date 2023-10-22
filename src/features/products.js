import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: undefined,
};

export const products = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProducts: (state, action) => {
			state.items = action.payload;
		},
	},
	extraReducers: {
		['cart/createCartItem']: (state, action) => {
			console.log('Add reducer');
			state.items.find((el) => el.id === action.payload.id).picked = true;
		},
		['cart/deleteCartItem']: (state, action) => {
			console.log('Delete reducer');
			state.items.find((el) => el.id === action.payload[0].id).picked = false;
		},
	},
});

export function getProductsList(action) {
	return function (dispatch, getState) {
		fetch('/data/inventory.json')
			.then((response) => response.json())
			.then((data) => dispatch(addProducts(data.products)));
	};
}

export const { addProducts, togglePick } = products.actions;
export default products.reducer;
