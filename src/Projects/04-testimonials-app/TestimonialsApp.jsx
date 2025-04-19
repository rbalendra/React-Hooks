import Title from '../components/Title';
import Button from '../components/Button';
import { BsFileEarmarkPost } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import { useState, useEffect } from 'react';

const TestimonialsApp = () => {
	const [testimonials, setTestimonials] = useState('');
	const [items, setItems] = useState();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
			.then((response) => response.json())
			.then((json) => setItems(json));
	}, [testimonials]); //as soon testimonials changes the fetch will run again

	return (
		<div className='container m-auto'>
			<Title text={'Testimonials App'} />
			<Button
				btnClass={'btn-info'}
				text={'Posts'}
				icon={<BsFileEarmarkPost className='mr-1' />}
				onClick={() => setTestimonials('Posts')}
			/>
			<Button
				btnClass={'btn-info'}
				text={'Users'}
				icon={<FaUserAlt className='mr-1' />}
				onClick={() => setTestimonials('Users')}
			/>
			<Button
				btnClass={'btn-info'}
				text={'Comments'}
				icon={<BiCommentDetail className='mr-1' />}
				onClick={() => setTestimonials('Comments')}
			/>

			<Title
				classes={'subtitle text-primary'}
				text={!testimonials ? 'Select from above' : testimonials}
			/>
			{!items
				? null
				: items.map((item) => {
						return (
							<div className='card card-primary mb-2' key={item.id}>
								{item.name && <h2 className='card-header'>{item.name}</h2>}
								<div className='card-body'>
									<h4>{item.title}</h4>
									<p>{item.body}</p>
								</div>
								{item.email && (
									<small className='card-footer'>{item.email}</small>
								)}
							</div>
						);
				  })}
		</div>
	);
};

export default TestimonialsApp;
