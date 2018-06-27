import React, { Component } from 'react';
import { DropdownList, DropdownListElement } from '../StyledComponents/ConfigCompos';

export default class TimerList extends Component {
  constructor() {
    super()
    this.state = {
      interval: [
        {
          id: 0,
          selected: false,
          key: 'interval',
          interval: 0
        },
        {
          id: 1,
          selected: false,
          key: 'interval',
          interval: 15
        },
        {
          id: 2,
          selected: false,
          key: 'interval',
          interval: 30
        },
        {
          id: 3,
          selected: false,
          key: 'interval',
          interval: 45
        },
        {
          id: 4,
          selected: false,
          key: 'interval',
          interval: 60
        },
        {
          id: 5,
          selected: false,
          key: 'interval',
          interval: 75
        },
        {
          id: 6,
          selected: false,
          key: 'interval',
          interval: 90
        },
      ]
    }
  }


  render() {
    return (
      <div></div>
    );
  }
}