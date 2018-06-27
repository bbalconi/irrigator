import React, { Component } from 'react';
import { DropdownHeader, DropdownList, DropdownListElement } from '../StyledComponents/ConfigCompos';
import onClickOutside from 'react-onclickoutside';

export default class WaterIntervalSelector extends Component {
  constructor() {
    super()
    this.toggleIsOver = this.toggleIsOver.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      isOver: false,
      intervals: [{
        id: 0,
        selected: false,
        key: 'interval',
        value: 0
      }, {
        id: 1,
        selected: false,
        key: 'interval',
        value: 15
      },{
        id: 2,
        selected: false,
        key: 'interval',
        value: 30
      },{
        id: 3,
        selected: false,
        key: 'interval',
        value: 45
      }]
    }
  }

  handleClickOutside() {
    console.log('clicked outside');
    this.setState({
      isOver: false
    });
  };

  toggleIsOver() {
    this.setState({
      isOver: !this.state.isOver
    });
  };


  render() {
    const{isOver, intervals} = this.state;
    return (
      <div >
        <DropdownHeader onClick={this.toggleIsOver}>button</DropdownHeader>
        {isOver && <DropdownList>
          {intervals.map((item) => (
            <DropdownListElement key={item.id}>{item.value}</DropdownListElement>
          ))}
        </DropdownList>
        }
      </div>
    );
  }
}