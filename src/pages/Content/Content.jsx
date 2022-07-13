import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment } from '../../state/slices/example';

const Content = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.example.counter);

	const handleClick = async () => {
		await dispatch(increment());
	};

	return (
		<div className="Content">
			<p>
				Counter value is <code>{counter}</code>
			</p>
			<button className='button' onClick={handleClick}>Increment</button>
		</div>
	);
};

export default Content;