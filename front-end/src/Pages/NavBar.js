import React, { Component } from 'react';
import { NavBar, NavList, NavItem } from '../StyledComponents/Components';


export default class extends Component {
  render() {
    return (
      <NavBar>
        <NavList>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/configure'>Configure</NavItem>
          <NavItem to='/reports'>Reports</NavItem>
          <NavItem to='/profile'>Profile</NavItem>
        </NavList>
      </NavBar>
    );
  }
}