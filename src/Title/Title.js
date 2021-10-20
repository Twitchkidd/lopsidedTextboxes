import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: grid;
	place-content: center;
	text-align: center;
	grid-template-columns: repeat(3, 33.33%);
	width: 80vw;
	height: 40vh;
	background-color: rebeccapurple;
`;

const TitleText = styled.p`
	font-family: 'JetBrains Mono', monospace;
	color: #e5e5e5;
	font-size: xxx-large;
	grid-column: 2 / span 1;
	${props => props.second && 'color: orange;'}
	${props => props.second && 'grid-column: 3 / span 1;'}
`;

const Title = () => {
	const text =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum modi doloremque doloribus dignissimos aperiam laboriosam et numquam, atque nihil. Voluptates ipsam consequatur veniam nisi modi consequuntur dolore deleniti exercitationem, ratione incidunt laboriosam earum sunt ut deserunt blanditiis dignissimos aperiam esse.';
	const [index, setIndex] = useState(1);
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(val => {
				if (val === text.length) {
					clearInterval(interval);
					return val;
				}
				return val + 1;
			});
		}, 30);
		return () => clearInterval(interval);
	}, []);
	return (
		<Wrapper>
			<TitleText>{text.slice(0, index)}</TitleText>
			<TitleText second>{text[index - 1]}</TitleText>
		</Wrapper>
	);
};

export default Title;
