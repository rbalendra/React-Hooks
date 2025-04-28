import './App.css';
import EsignatureApp from './Projects/01-e-signature-app/EsignatureApp';
import RandomiseColors from './Projects/02-randomisecolors/RandomiseColors';
import LikePhotoApp from './Projects/03-like-my-photo/LikePhotoApp';
import TestimonialsApp from './Projects/04-testimonials-app/TestimonialsApp';
import AlertApp from './Projects/05-Alerts/AlertApp';
import TemperatureControllerApp from './Projects/06-temperature-controller/TemperatureControllerApp';

function App() {
	return (
		<div className='App'>
			{/* <EsignatureApp />; */}
			{/* <RandomiseColors /> */}
			{/* <LikePhotoApp /> */}
			{/* <TestimonialsApp /> */}
			{/* <AlertApp /> */}
			<TemperatureControllerApp />
		</div>
	);
}

export default App;
