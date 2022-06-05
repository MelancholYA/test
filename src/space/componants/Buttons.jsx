import React from 'react';

const Buttons = ({ move, rotate }) => {
	return (
		<div className='space_cntrls'>
			<h3>Controls</h3>
			<button onClick={() => move('f')}>f</button>
			<br />

			<button onClick={() => rotate('r')}>r</button>
			<button onClick={() => move('b')}>b</button>
			<button onClick={() => rotate('l')}>l</button>
		</div>
	);
};

export default Buttons;
