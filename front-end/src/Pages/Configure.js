import React, { Component } from 'react';
import { Body } from '../StyledComponents/Components';
import { ConfigInputContainer, ConfigInputs, SettingWrapper, TimerButton } from '../StyledComponents/ConfigCompos';
import WaterIntervalSelector from './WaterIntervalSelector';
import Days from './Days'
const axios = require('axios');

export default class Configure extends Component {
  constructor() {
    super();
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateRunTime = this.updateRunTime.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
    this.state = {
      startTime: 0,
      runTime: 0
    };
  }

  updateStartTime(e) {
    this.setState({
      startTime: e.target.value
    });
  };

  updateRunTime(e) {
    this.setState({
      runTime: e.target.value
    });
  };

  dateMath(time) {
    let today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let dateTime = `${date} ${time.startTime}`;
    console.log(dateTime);
    let dbDate = new Date(dateTime)
    console.log(dbDate)
    this.saveSettings(dbDate, time.runTime);
  }

  saveSettings(dateTime, runTime) {
    axios.post('/saveSettings', {
      startTime: dateTime,
      runTime 
    }).then((res) => {
      console.log(res);
    });
  };

  render() {
    let times = {
      startTime: this.state.startTime,
      runTime: this.state.runTime
    }
    return (
      <Body>
        <ConfigInputContainer>
          <SettingWrapper>
            What time would you like to start watering?
           <ConfigInputs type="time" value={this.state.startTime} onChange={this.updateStartTime} />
          </SettingWrapper>
          <Days />
          <SettingWrapper>
            How long do you want to water for? (in minutes)
           <ConfigInputs type="text" value={this.state.runTime} onChange={this.updateRunTime} />
          </SettingWrapper>
          <TimerButton onClick={() => this.dateMath(times)}>Save Settings</TimerButton>
        </ConfigInputContainer>
        <WaterIntervalSelector />
      </Body>
    );
  }
}