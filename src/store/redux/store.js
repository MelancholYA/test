import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/calc';

export default configureStore({
	reducer: {
		cartReducer,
	},
});
