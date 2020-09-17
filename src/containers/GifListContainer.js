import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
      fetchedGifs: []
    }

    render() {
      return (
          <div>
            <GifSearch fetchingGifs = {this.fetching}/>
            <GifList gifs = { this.state.fetchedGifs }/>
          </div>
      )
    }

     fetching = function(query) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
            let x = data.data.slice(0, 3).map(ele => ele)
            const [a, b, c] = x;
            let firstThreeImgs = [a, b, c]
          this.setState({
              fetchedGifs : firstThreeImgs
        })
        })
    }

    componentDidMount() {
        this.fetching()
    }

  }

  export default GifListContainer
