import React from 'react';

const Button = ({ text = 'click', btnClass, icon, onClick }) => {
	return (
		<button className={`btn ${btnClass}`} onClick={onClick}>
			{icon}
			{!text ? 'Click' : text}
		</button>
	);
};

export default Button;
