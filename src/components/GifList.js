// 9gZbdoD9k5Q8s6cYFVNVkBJ90nDq6yB3

// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=9gZbdoD9k5Q8s6cYFVNVkBJ90nDq6yB3&rating=g

import React, { Component } from "react";

export class GifList extends Component {
  render() {
    return (
      <div>
        {this.props.gifs.map((gif) => (
          <img key={gif.url} src={gif.url} alt="gif" />
        ))}
      </div>
    );
  }
}

export default GifList;
