import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Title.css';

const MainText = styled.p`
	width: ${props => props.text.length + 1}ch;
	&::after {
		content: '${props => props.text[props.index - 1]}';
		color: orange;
		margin-left: 10vw;
	}
`;

export default function Title() {
	const text = 'Jadefalke';
	const [index, setIndex] = useState(1);

	useEffect(() => {
		// const id = setInterval(() => {
		// 	setIndex(val => {
		// 		if (val > text.length - 2) {
		// 			setUnderscore(null);
		// 			clearInterval(id);
		// 		}
		// 		return val + 1;
		// 	});
		// }, Math.random() * 150 + 100);
		const interval = setInterval(() => {
			setIndex(val => {
				if (val === text.length) {
					clearInterval(interval);
					return val;
				}
				return val + 1;
			});
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='title'>
			<MainText text={text} index={index}>
				{text.slice(0, index)}
			</MainText>
		</div>
	);
}
