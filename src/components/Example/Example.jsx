import React, { Component } from 'react'

export default class Example extends Component {

  state = {
    title: 'This is the title',
    number: 0,
  }

  handleClick = () => {
    this.setState({
      title: "Title is Changed",
      number: this.state + 1,
    });
  }


  render() {
    const { title, number } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{number}</p>
      </div>
    )
  }
}
