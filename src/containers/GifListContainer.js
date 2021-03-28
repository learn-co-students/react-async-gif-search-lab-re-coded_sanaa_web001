import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  render() {
    return(
      <div style={{display:"grid", gridTemplateColumns:"3fr 1fr"}}>
        <GifList gifs={this.state.gifs} />
        <GifSearch fetchGIFs={this.fetchGIFs} />
      </div>
    )
  }

  fetchGIFs = (GetItems = "cats") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${GetItems}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  componentDidMount() {
    this.fetchGIFs()
  }
}

export default GifListContainer