import Button from '../components/Button';
import Title from '../components/Title';
import { useContext } from 'react';
import { ThemeContext } from './context/theme-context';

const Blog = () => {
	const { theme, changeTheme } = useContext(ThemeContext);

	return (
		<div className='container p-1'>
			<Title text={`My Blog with ${theme} Theme`} />
			<span style={{ position: 'absolute', top: 10, right: 10 }}>
				<Button
					text={theme == 'dark' ? 'Light' : 'Dark'}
					btnClass={`${theme === 'dark' && 'btn-light'} btn-sm`}
					onClick={changeTheme}
				/>
			</span>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, non rem
				veritatis maxime magnam blanditiis iste. Eum quisquam aut nisi suscipit.
				Eos deleniti dolorem repellendus odio debitis, sapiente mollitia rem.
				Eveniet culpa obcaecati nemo nobis cum facilis reprehenderit nihil porro
				eius in impedit voluptatem similique dolorem consectetur voluptate amet
				adipisci alias odit, ipsam fuga eum? Suscipit numquam at cumque ea. In
				omnis iure perspiciatis vitae! Cupiditate dolore inventore fugit facere
				natus rerum, quo accusamus nisi eos, aut sapiente error voluptate
				commodi veritatis aperiam reprehenderit enim, reiciendis exercitationem
				odit? Quod, sed! Laboriosam veritatis non, sunt quos molestias autem at
				consequuntur, eos optio blanditiis libero fugit voluptatem voluptatibus
				incidunt sapiente qui nisi maiores a neque. Repudiandae asperiores
				repellat laboriosam quis vitae veniam! Quibusdam odit distinctio quod
				pariatur, numquam non, accusantium harum magnam labore dolores tempore
				ipsam magni dolore, perspiciatis adipisci corporis dolorum! Possimus
				atque velit voluptatum doloremque, a maiores odio voluptatibus
				similique! Earum facilis delectus laborum eos esse architecto eius a
				quidem, minus sit maxime quos natus, cumque optio impedit rem veniam in
				aliquam? Necessitatibus cum nobis, nihil mollitia veritatis laborum
				ratione. Delectus, magni sequi laudantium impedit unde quisquam
				accusamus dolorum quis in. Autem dignissimos repellat necessitatibus
				eaque itaque ad ipsam deleniti vitae porro officiis tenetur sed
				excepturi, quidem enim placeat distinctio. Debitis fugit autem maxime
				veniam non accusantium temporibus ea officiis expedita animi ducimus
				quas adipisci dignissimos maiores nostrum dolor placeat itaque eligendi
				deserunt, iste consequuntur nisi nemo? Eos, fuga corrupti. Veritatis
				voluptatibus eveniet sapiente a ullam, autem delectus rem ipsa saepe
				libero dolor qui culpa quo magni est accusantium, similique optio,
				laborum modi accusamus aperiam obcaecati itaque neque. Asperiores,
				eveniet. Saepe quo molestiae repellat praesentium voluptate ducimus
				quaerat ratione facere ut rem aut eius sequi maiores quibusdam aliquam
				in nihil quae nemo reiciendis, obcaecati eos voluptatum dolorem.
				Quibusdam, harum dolor?
			</p>
		</div>
	);
};

export default Blog;
