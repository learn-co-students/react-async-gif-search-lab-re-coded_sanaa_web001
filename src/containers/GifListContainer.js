import React, {Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends Component {
  state = {
    result: []
  }
   fetchGIFs = (search = "dolphins") =>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
          result:data.map(obj =>  ({url: obj.images.original.url}) )
        })
      })
  }
  componentDidMount() {
      this.fetchGIFs();
  }
  render() {
   return (
      <div>
      <GifSearch fetchGIFs={this.fetchGIFs} />
       <GifList gifs={this.state.result} />
      </div>
  )
}
}
export default GifListContainer;
