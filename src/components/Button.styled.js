import styled from 'styled-components';


export const Button = styled.button`
	border: none;
	background: ${({ theme }) => theme.colors.pic1};
	position: relative;
	overflow: hidden;
    padding: 6px 12px;
	cursor: pointer;
	font-size: 20px;
	color: ${({ theme }) => theme.colors.text};
border-radius:3px;

&::before {
	content: "";
	width: 10rem;
	height: 1.5rem;
	position: absolute;
	top: -100%;
	left: -90%;
	background-color: #f2e8cf;
	transform: rotateZ(115deg);
	transition: left 800ms ease, transform 800ms ease;
}

&:hover:before {
	left: 70%;
}

&:active {
	transform: scale(0.98);
}
  `