import React, { Component } from 'react';
import { Body } from '../StyledComponents/Components';
import openSocket from 'socket.io-client';
const axios = require('axios');

export default class HomePage extends Component {
  constructor(){
    super()
    this.socket;
  }

  componentDidMount(){
    axios.post('/socketUrl').then((res) => {
      console.log(res);
      const socketUrl = res.data;
      this.socket = openSocket(socketUrl);
    })
  }

  render() {
    return (
      <Body> Body </Body>
    );
  }
}