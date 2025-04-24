import { useState, useEffect } from 'react';
import Button from './Button';

const Alert = ({ type, message, delay = false, delayTime = 3000 }) => {
	const [showAlert, setShowAlert] = useState(true);

	const closeAlert = (e) => {
		e.target.parentElement.parentElement.classList.add('fadeAlert');
		setTimeout(() => {
			setShowAlert(false); // Fixed: now calling the function instead of assignment
		}, 400);
	};

	useEffect(() => {
		delay &&
			setTimeout(() => {
				setShowAlert(false);
			}, delayTime);
	});

	return (
		showAlert && (
			<div className={`alert alert-${type}`}>
				<div className='alert-close'>
					<span className='mr-1'>{message}</span>
					<Button btnClass={'btn-close'} text={'X'} onClick={closeAlert} />
				</div>
			</div>
		)
	);
};

export default Alert;
