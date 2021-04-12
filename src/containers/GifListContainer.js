import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    gifs: [],
    query: 'hogs'
  }

  componentDidMount = () => {
    console.log(`GifListContainer mounted`)
    this.fetchGifs()
  }

  fetchGifs = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        gifs: json.data
      })
    })
  }

  submitQuery = (e) => {
    e.preventDefault()
    console.dir(e.target.query.value)
    this.setState({
      query: e.target.query.value
    }, () => {
      this.fetchGifs()
    })
  }

  render() {
    return (
      <div>
        <GifSearch submitQuery={this.submitQuery}/>
        <GifList gifs={this.state.gifs} query={this.state.query}/>
      </div>
    );
  }
}

export default GifListContainer