import React, { Component } from "react";

import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesUrls: [],
    };
  }

  fetchGifs(query) {
    let url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((dogs) => {
        let imagesUrls = dogs.data.filter((image, index) => {
          return index < 3;
        });
        console.log(imagesUrls);
        for (let i = 0; i < imagesUrls.length; i++) {
          this.setState({
            imagesUrls: imagesUrls,
          });
        }
      });
  }
  handleSubmit = (query) => {
    this.fetchGifs(query);
  };
  render() {
    console.log(this.state.imagesUrls);
    return (
      <div>
        <GifList images={this.state.imagesUrls} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
