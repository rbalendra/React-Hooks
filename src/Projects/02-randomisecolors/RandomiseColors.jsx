import React from 'react';
import Title from '../components/Title';

const RandomiseColors = () => {
	const handleClick = (e) => {
		e.target.style.background = getRandomColor();
	};

	const handleSecClick = (e) => {
		// console.log(e.target);
		// console.log(getRandomColor());
		let body = document.querySelector('body');
		body.style.background = getRandomColor();
		// e.target.style.backgroundColor = getRandomColor();
	};

	const getRandomColor = () => {
		//here we are creating random color values
		const letters = '0123456789ABCDEF';
		let colors = '#';
		for (let i = 0; i < 6; i++) {
			colors += letters[Math.floor(Math.random() * 16)];
		}
		return colors;
	};

	return (
		<div className='container m-auto text-center'>
			<Title text={'Randomise Colors'} classes={'mb-4'} />
			<button className='btn btn-danger' onClick={(e) => handleClick(e)}>
				Click me
			</button>
			<button className='btn btn-success' onClick={handleSecClick}>
				Click me
			</button>
			<button className='btn btn-primary' onClick={handleSecClick}>
				Click me
			</button>
			<button className='btn btn-warning' onClick={handleSecClick}>
				Click me
			</button>
		</div>
	);
};

export default RandomiseColors;
