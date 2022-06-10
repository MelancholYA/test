import React from 'react';
import { Provider } from 'react-redux';
import Cart from './componants/Cart';
import Products from './componants/Products';
import store from './redux/store';
import '../styles/store.css';

const index = () => {
	return (
		<Provider store={store}>
			<div className='store'>
				<Products />
				<Cart />
			</div>
		</Provider>
	);
};

export default index;
