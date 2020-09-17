import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    searchTerm: "dolphin",
    results: [],
  }

  getData = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC`)
      .then(res => res.json())
      .then(results => this.setState({ results: results.data }))
  }

  componentDidMount = () => {
    this.getData();
  }

  updateSearchTerm = (search) => {
    this.setState({
      searchTerm: search
    }, this.getData)
  }

  render() {
    console.log(this.state.results)
    return (
      <div>
      <div >GifListContainer</div>
      <GifSearch updateSearchTerm={this.updateSearchTerm} />
      <GifList results={this.state.results}/>
      </div>
    )
  }
}

export default GifListContainer;