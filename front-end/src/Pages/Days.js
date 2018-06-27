import React, { Component } from 'react';
import { DaysWrapper } from '../StyledComponents/ConfigCompos';
import ClickableDay from './ClickableDay';


export default class Days extends Component {

  render() {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
      <DaysWrapper>
        {days.map((days, index) => {
              return <ClickableDay key={index} days={days}/>
        })}
      </DaysWrapper>
    );
  }
}