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
});

export function getProductList(action) {
	return function (dispatch, getState) {
		fetch('/data/invetory.json')
			.then((response) => response.json())
			.then((data) => dispatch(addProducts(data.products)));
	};
}

export const { addProducts } = products.actions;
export default products.reducer;
