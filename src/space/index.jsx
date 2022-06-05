import React, { useState } from 'react';
import '../styles/space.css';
import Buttons from './componants/Buttons';
import Map from './componants/Map';

const Space = () => {
	const [currPos, setCurrPos] = useState({
		x: 20,
		y: 20,
	});
	const [dir, setDir] = useState({
		direction: 'y',
		pase: 1,
	});
	const rotate = (letter) => {
		switch (letter) {
			case 'r':
				if (dir.direction === 'y' && dir.pase === 1) {
					setDir({ ...dir, direction: 'x' });
				} else if (dir.direction === 'x' && dir.pase === 1) {
					setDir({ direction: 'y', pase: -1 });
				} else if (dir.direction === 'y' && dir.pase === -1) {
					setDir({ direction: 'x', pase: -1 });
				} else {
					setDir({ direction: 'y', pase: 1 });
				}
				break;
			case 'l':
				if (dir.direction === 'y' && dir.pase === 1) {
					setDir({ direction: 'x', pase: -1 });
				} else if (dir.direction === 'x' && dir.pase === -1) {
					setDir({ direction: 'y', pase: -1 });
				} else if (dir.direction === 'y' && dir.pase === -1) {
					setDir({ ...dir, direction: 'x', pase: 1 });
				} else {
					setDir({ direction: 'y', pase: 1 });
				}
				break;
			default:
				break;
		}
	};
	const move = (step) => {
		const newPos = { ...currPos };
		switch (step) {
			case 'f':
				if (currPos[dir.direction] < 380 && dir.pase === 1) {
					newPos[dir.direction] += 40 * dir.pase;
				} else if (currPos[dir.direction] >= 380 && dir.pase === 1) {
					newPos[dir.direction] = 20;
				} else if (currPos[dir.direction] <= 20 && dir.pase === -1) {
					newPos[dir.direction] = 380;
				} else {
					newPos[dir.direction] += 40 * dir.pase;
				}
				setCurrPos(newPos);
				break;
			case 'b':
				if (
					currPos[dir.direction] < 380 &&
					currPos[dir.direction] > 20 &&
					dir.pase === 1
				) {
					newPos[dir.direction] -= 40 * dir.pase;
				} else if (currPos[dir.direction] >= 380 && dir.pase === -1) {
					newPos[dir.direction] = 20;
				} else if (currPos[dir.direction] <= 20 && dir.pase === 1) {
					newPos[dir.direction] = 380;
				} else {
					newPos[dir.direction] -= 40 * dir.pase;
				}
				setCurrPos(newPos);
				break;
			default:
				break;
		}
	};
	const getDegree = () => {
		if (dir.direction === 'y' && dir.pase === 1) {
			return 0;
		} else if (dir.direction === 'y' && dir.pase === -1) {
			return 180;
		} else if (dir.direction === 'x' && dir.pase === 1) {
			return 90;
		} else {
			return 270;
		}
	};
	const getCardinalDirection = () => {
		const degree = getDegree();
		switch (degree) {
			case 0:
				return 'N';
			case 90:
				return 'E';
			case 180:
				return 'S';
			case 270:
				return 'W';

			default:
				break;
		}
	};

	return (
		<div className='space'>
			<div className='space_map'>
				<Map currPos={currPos} degree={getDegree} />
			</div>
			<div>
				<div className='space_cords'>
					<h3>Current position</h3>
					<h4>
						{(currPos.x - 20) / 40 +
							',' +
							(currPos.y - 20) / 40 +
							',' +
							getCardinalDirection()}
					</h4>
				</div>
				<Buttons move={move} rotate={rotate} />
			</div>
		</div>
	);
};

export default Space;
