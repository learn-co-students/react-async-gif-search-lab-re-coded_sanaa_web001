import React, { Component } from 'react';

class GifList extends Component {

  
    render() {
      return (
        <div>
        {this.props.Gif.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
        </div>
      )
    }
  
  }
  
  export default GifList