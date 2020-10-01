import React, { Component } from "react";

export default class GifList extends Component {
  renderList = () => {
    console.log(this.props.images);
    return this.props.images.map((url) => {
      console.log(url.images.original.url);
      return (
        <li>
          <img src={url.images.original.url} alt="" />
        </li>
      );
    });
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}
