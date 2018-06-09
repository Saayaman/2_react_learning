import React, { Component } from 'react'

export default class PortfolioItemButton extends Component {
  render() {
    return (
      <div className="PortfolioItem-button">
        {this.props.text}
      </div>
    )
  }
}
