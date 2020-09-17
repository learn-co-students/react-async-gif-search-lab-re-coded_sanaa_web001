import React from 'react';

class GifList extends React.Component {

  displayGifs = () => {
    return this.props.results.map( (gif, i) => {
        while (i < 3) {
          return (
          <div key={i}>
            <li>
              <img src={gif.images.fixed_width_small_still.url} alt="pictures"/>
            </li>
          </div>
        )
        }
    })
  }

  render() {
    return (
      <div>
      <ul>
      <this.displayGifs />
      </ul>
      </div>
    )
  }
}

export default GifList;