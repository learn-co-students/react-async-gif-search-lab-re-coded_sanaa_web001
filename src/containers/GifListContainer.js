import React from "react"
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GiftListContainer extends React.component{
  constructor(){
    super()
    this.state={
      gifs:[]
    }
  }
  
  render(){
    componenDidMount(){
      const fetchTheGifs=()=>{
         fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
      }
    }
    return(
      <div>
      <GifSearch fetchGIFs={this.fetchGIFs}/>
      <GifList gifs={this.state.gifs} />
      </div>)
  }
}

export default GiftListContainer