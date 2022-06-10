import { createSlice } from '@reduxjs/toolkit';

const checkDis = (crt) => {
	let butters = crt[crt.findIndex((obj) => obj.id === 2)]?.amount;
	let milks = crt[crt.findIndex((obj) => obj.id === 1)];
	let bread = crt[crt.findIndex((obj) => obj.id === 0)];
	if (butters) {
		let discount = Math.floor(butters / 2);
		if (bread) {
			bread.discount =
				bread.amount * bread.price >= bread.price * ((1 / 2) * discount)
					? bread.price * ((1 / 2) * discount)
					: bread.price * bread.amount;
		}
	}
	if (milks?.amount >= 4 && milks?.amount % 4 === 0) {
		if (milks.discount) {
			milks.discount += parseFloat(
				((milks.amount / 4) * milks.price).toFixed(2),
			);
		} else {
			milks.discount = parseFloat(
				((milks.amount / 4) * milks.price).toFixed(2),
			);
		}
	}
	return crt;
};

export const counterSlice = createSlice({
	name: 'calc',
	initialState: {
		cart: [],
	},
	reducers: {
		addToCart: (state, action) => {
			if (state.cart.findIndex((obj) => obj.id === action.payload.id) === -1) {
				action.payload.amount = 1;
				state.cart.push(action.payload);
			} else {
				state.cart.map((item) =>
					item.id === action.payload.id ? (item.amount += 1) : item,
				);
			}
			state.cart = checkDis(state.cart);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart } = counterSlice.actions;

export default counterSlice.reducer;
