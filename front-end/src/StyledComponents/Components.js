import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = styled.div`    
  color: white;
  background-color: #230e0e;
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 40px;
`;

const NavList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
`;


const activeClassName = 'nav-item-active'

const NavItem = styled(Link).attrs({
activeClassName
})`
font-family: 'Oswald', sans-serif;
text-decoration: none;
color: white;
width: 120px;
border-bottom: none;
height: 50px;
line-height: 50px;
font-size: 1.4em;
display: inline-block;
margin-right: -4px;

&.${activeClassName} {
  color: purple;
}
`;

const Body = styled.div`
  margin-top: 65px;
`;


export { NavBar, NavList, NavItem, Body, activeClassName };