import React from 'react';
import Alert from '../components/Alert.jsx';

const AlertApp = () => {
	return (
		<div className='container mx-auto'>
			<Alert type={'success'} message={'Succesful login'} />
			<Alert
				type={'info'}
				message={'Time Triggered'}
				delay={true}
				delayTime={1000}
			/>
		</div>
	);
};

export default AlertApp;
