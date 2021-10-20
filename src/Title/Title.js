import { useEffect, useState } from 'react';
import './Title.css';

export default function Title() {
	const text = 'Jadefalke';
	const [index, setIndex] = useState(9);
	// const [underscore, setUnderscore] = useState('_');

	// useEffect(() => {
	// 	const id = setInterval(() => {
	// 		setIndex(val => {
	// 			if (val > text.length - 2) {
	// 				setUnderscore(null);
	// 				clearInterval(id);
	// 			}
	// 			return val + 1;
	// 		});
	// 	}, Math.random() * 150 + 100);

	// 	return () => clearInterval(id);
	// }, []);

	return (
		<div className='title'>
			<p id={'main_text'}>
				{text.slice(0, index)}
				{text[index]}
			</p>
		</div>
	);
}
