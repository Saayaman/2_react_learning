import React, { Component } from 'react'

export default class Example2 extends Component {
  render() {
    return (
      <ChildComponent text={"これは親Componentから送られて来たテキストです。"}/>
    )
  }
}

export class ChildComponent extends Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}
