import { useDispatch } from 'react-redux/es/exports';
import { addAmount, minuseElm } from '../redux/features/calc';

const Element = ({ elm }) => {
	const dispatch = useDispatch();
	return (
		<div className='store_cart_elmnts_element'>
			<div className='store_cart_elmnts_element_pic'>
				<img src={elm.pic} alt='' />
			</div>

			<div className='store_cart_elmnts_element_details'>
				<h5 className='store_cart_elmnts_element_details_name'>{elm.name}</h5>
				<div className='store_cart_elmnts_element_details_controls'>
					<p>Quantity:</p>
					<button onClick={() => dispatch(minuseElm(elm))}>-</button>
					<span>{elm.amount}</span>
					<button onClick={() => dispatch(addAmount(elm))}>+</button>
				</div>
			</div>

			<h3 className='store_cart_elmnts_element_price'>
				{elm.discount > 0 && (
					<span className='store_cart_elmnts_element_price_disc'>
						{Number(elm.discount.toFixed(2))} £
					</span>
				)}
				<br />
				{Number((elm.amount * elm.price).toFixed(2))} £
			</h3>
		</div>
	);
};

export default Element;
