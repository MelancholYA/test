import { createSlice } from '@reduxjs/toolkit';

const checkDis = (crt, id) => {
	let butters = crt[crt.findIndex((obj) => obj.id === 2)]?.amount;
	let milks = crt[crt.findIndex((obj) => obj.id === 1)];
	let bread = crt[crt.findIndex((obj) => obj.id === 0)];

	if (id === 1) {
		if (milks?.amount >= 4 && milks?.amount % 4 === 0) {
			if (milks.discount) {
				milks.discount += Number(((milks.amount / 4) * milks.price).toFixed(2));
			} else {
				milks.discount = Number(((milks.amount / 4) * milks.price).toFixed(2));
			}
		} else if (milks.amount < 4) {
			delete milks.discount;
		}
	} else {
		if (butters) {
			let discount = Math.floor(butters / 2);
			if (bread) {
				bread.discount =
					bread.amount * bread.price >= bread.price * ((1 / 2) * discount)
						? bread.price * ((1 / 2) * discount)
						: bread.price * bread.amount;
			}
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
				let newElm = { ...action.payload };
				newElm.amount = 1;
				state.cart.push(newElm);
			} else {
				state.cart.map((item) =>
					item.id === action.payload.id ? (item.amount += 1) : item,
				);
			}
			state.cart = checkDis(state.cart, action.payload.id);
		},
		addAmount: (state, action) => {
			state.cart.map((item) =>
				item.id === action.payload.id ? (item.amount += 1) : item,
			);
			state.cart = checkDis(state.cart, action.payload.id);
		},
		minuseElm: (state, action) => {
			state.cart.map((item, i) =>
				item.id === action.payload.id && item.amount > 1
					? (item.amount -= 1)
					: item.id === action.payload.id && item.amount === 1
					? state.cart.splice(i, 1)
					: item,
			);
			state.cart = checkDis(state.cart, action.payload.id);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, addAmount, minuseElm } = counterSlice.actions;

export default counterSlice.reducer;
