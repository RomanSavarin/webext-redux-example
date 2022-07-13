import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
	counter: 42
};

export const create = (initialState) => createSlice({
	name: 'example',
	initialState: initialState || defaultState,
	reducers: {
		increment(state) {
			state.counter += 1;
		},
		decrement(state) {
			state.counter -= 1;
		},
		set(state, action) {
			state.counter = action.payload;
		},
	}
});


const exampleSlice = create();
export const { increment, decrement, set } = exampleSlice.actions;
export default exampleSlice.reducer;