import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifs: []
    }
  }
  handleFetch = (query) =>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        gifs: data.data
      })
    })
  }
  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleFetch}/>
        {this.state.gifs.map((gif, i)=> (<GifList key={i} gif={gif.images.original.url}/>))}
      </div>
    )
  }
}