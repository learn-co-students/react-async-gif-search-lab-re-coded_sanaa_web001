import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

const URL =
  "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC";

class GifListContainer extends React.Component {
  state = {
    arrayOfAllGifs: []
  };

  componentDidMount() {
    this.fetchApi(URL); //mount and fetch our api data
  }

  fetchApi = queryStringInput => {
    fetch(queryStringInput)
      .then(res => res.json())
      .then(json => {
        //console.log(json); // - worked - returns an array;
        let getThreeGifsArray = json.data.slice(0, 3);
        //console.log(json.data.slice(0, 3));
        let gifUrls = getThreeGifsArray.map(
          singleGif => singleGif.images.original.url.split("?")[0]
        );
        //console.log(gifUrls);
        this.setState({
          arrayOfAllGifs: [...gifUrls] //spread operator
        });
      });
  };

  searchQuery = event => {
    this.fetchApi(
      "http://api.giphy.com/v1/gifs/search?q=" +
        event +
        "&api_key=dc6zaTOxFJmzC"
    );
  };

  render() {
    return (
      <div>
        <GifSearch
          data={this.state.arrayOfAllGifs}
          querySearch={this.searchQuery}
        />
        <GifList data={this.state.arrayOfAllGifs} />
      </div>
    );
  }
}

export default GifListContainer;
