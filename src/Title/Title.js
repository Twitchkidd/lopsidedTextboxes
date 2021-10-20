import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80vw;
	height: 40vh;
	background-color: rebeccapurple;
`;

const TitleText = styled.p`
	font-family: 'JetBrains Mono', monospace;
	color: #e5e5e5;
	font-size: xxx-large;
	${props => props.second && 'color: orange;'}
	${props => props.second && 'position: absolute;'}
	${props => props.second && 'left: 70%;'}
`;

const Title = () => {
	const text = 'Jadefalke';
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
		}, 200);
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
