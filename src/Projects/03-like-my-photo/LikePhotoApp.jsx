import { useState } from 'react';
import Title from '../components/Title';
import {
	AiTwotoneSmile,
	AiFillHeart,
	AiOutlineHeart,
	AiOutlineComment,
} from 'react-icons/ai';

const LikePhotoApp = () => {
	const [like, setLike] = useState(false);
	const [count, setCount] = useState(0);

	const toggleLike = () => {
		if (!like) {
			setLike(true);
			setCount(count + 1);
		} else {
			setLike(false);
			setCount(count - 1);
		}
	};

	return (
		<div className='container text-center'>
			<Title text={'Like Photo App'} />
			<Title text={`Likes ${count}`} classes={'subtitle'} />
			<div
				className='card card-dark m-auto shadow-md'
				style={{ width: 300, cursor: 'pointer' }}
				onDoubleClick={toggleLike}>
				<div className='card-header fs-xl'>
					<AiTwotoneSmile className='mr-2' />
					<small>Care Bears!</small>
				</div>
				<img
					src='https://placebear.com/300/500'
					alt='img'
					style={{ height: 'fit-content' }}
				/>

				<div
					className='card-footer fs-xl d-flex'
					style={{
						justifyContent: 'space-between',
					}}>
					<AiOutlineComment />{' '}
					{like ? (
						<AiFillHeart className='text-danger' onClick={toggleLike} />
					) : (
						<AiOutlineHeart onClick={toggleLike} />
					)}
				</div>
			</div>
		</div>
	);
};

export default LikePhotoApp;
