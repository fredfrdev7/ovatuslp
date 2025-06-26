import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
	background: linear-gradient(90deg, #1a1a1a 35%, #1a1a1a 86.61%);
	height: 110px;
	display: flex;
	position:sticky;
	justify-content: center;
	align-items: center;
	top: 0;
	z-index: 50;
	width: 100%;
    border-bottom: 1px solid;
    border-image: linear-gradient(to left, #1a1a1a , #92c03e , #1a1a1a ) 1;
	border-left: 0;
	border-right: 0;
	border-top: 0;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content:end;
	height: 80px;
`;

export const NavLogo = styled(Link)`
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	align-items: center;
	z-index: 50;
`;

export const NavIcon = styled.img`
	width: 10rem;

	@media screen and (max-width: 1440px) and (min-width: 1240px) {
		margin-right:23rem;
	}
	@media screen and (max-width: 1239px) and (min-width: 1024px) {
		margin-right:12rem;
	}
	@media screen and (max-width: 1023px) and (min-width: 961px) {
		margin-right:8rem;
	}
	@media screen and (max-width: 960px) and (min-width: 769px) {
		margin-right:34rem;
	}
	@media screen and (max-width: 768px) and (min-width: 591px) {
		margin-right:22rem;
	}
	@media screen and (max-width: 590px) and (min-width: 431px) {
		margin-right:15rem;
	}
	@media screen and (max-width: 430px) and (min-width: 390px){
		margin-right:12rem;
	}
	@media screen and (max-width: 389px) and (min-width: 320px){
		margin-right:9rem;
	}
`;
export const MobileIcon = styled.div`
	display: none;
	z-index: 50;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-50%, 70%);
		font-size: 2.5rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	color: #2c2c2c;
    display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 30rem;
		position: absolute;
		padding-top: 15%;
		top: 0;
		left: 0;
		opacity: ${({ $show }) => ($show ? 1 : 0)};
		visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
		transform: translateY(${({ $show }) => ($show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #3d3d3d;
		border-radius:0rem 0rem 0rem 0rem;
	}

	@media screen and (max-width: 590px) {
		height:28rem;
		padding-top: 20%;
	}

	@media screen and (max-width: 428px) {
		height:28rem;
		padding-top: 25%;
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 86px;
	margin-left:3rem;
	cursor: pointer;
	@media screen and (max-width: 960px) {
		border-bottom: 0.1px solid ;
		border-image: linear-gradient(to left, #3d3d3d , #92c03e, #3d3d3d) 1;
		border-left: 0;
		border-right: 0;
		border-top: 0;
		margin-left:0rem;
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(LinkScroll)`
	color: #f9f9f9;
	font-family: "roc-grotesk", sans-serif;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0rem 1rem;
	height: 100%;
	
	&.active {
		color: #92c03e;
		transition: all 0.3s ease;
		@media screen and (min-width: 960px) {
			border-bottom: 1px solid #92c03e;
			border-image: linear-gradient(to left, #1a1a1a , #92c03e) 1;
		}
	}
	&:hover {
		color: #92c03e;
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: #92c03e;
			transition: all 0.3s ease;
		}
	}
`;