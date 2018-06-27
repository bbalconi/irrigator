import React, { Component } from 'react';
import { InnerDays } from '../StyledComponents/ConfigCompos';

export default class ClickableDay extends Component {
  constructor() {
    super()
    this.state = {
      isClicked: false
    }
  }

  render() {
    const isClicked = this.state.isClicked;
    return (
      <div>
        {isClicked ? (
          <InnerDays primary onClick={() => this.setState({isClicked:!this.state.isClicked})}>{this.props.days}</InnerDays>
        ) : (
          <InnerDays onClick={() => this.setState({isClicked:!this.state.isClicked})}>{this.props.days}</InnerDays>
          )}
      </div>
    )
  }
}