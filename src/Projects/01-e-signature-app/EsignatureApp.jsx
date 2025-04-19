import React, { useState } from 'react';
import Title from '../components/Title';

const EsignatureApp = () => {
	const [name, setName] = useState('Your Signature Here');
	const [date, setDate] = useState();

	const inputStyle = {
		border: 'none',
		borderBottom: '2px dotted',
		outline: 'none',
		padding: '.5rem 0',
	};

	document.body.style.background = '#eee';

	const handleInput = (e) => {
		setName(e.target.value);
	};

	const handleTime = (e) => {
		setDate(e.target.value);
	};

	return (
		<div className='container text-center'>
			<Title classes={'title'} text={name} />
			<Title classes={'main-title mb-4'} text={!date ? 'DOB' : date} />
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fuga
				reprehenderit, et, sed nihil velit nesciunt aut impedit maiores possimus
				sunt laborum vitae voluptate similique placeat illo repellat eligendi!
				Cum.
			</p>
			<footer
				className='d-flex'
				style={{
					justifyContent: 'space-around',
					position: 'relative',
					top: '40vh',
				}}>
				<input
					type='date'
					value={date}
					style={inputStyle}
					onChange={handleTime}
				/>
				<input
					type='text'
					value={name}
					style={inputStyle}
					onChange={handleInput}
				/>
			</footer>
		</div>
	);
};

export default EsignatureApp;
