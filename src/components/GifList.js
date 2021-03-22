import React, { Component } from 'react'

export default class GifList extends Component {
  render() {
    return (
      <div>
        <img src={this.props.gif} alt="d"/>
      </div>
    )
  }
}