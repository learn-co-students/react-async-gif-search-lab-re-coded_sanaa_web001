import React from 'react'

class GifList extends React.Component {

  state = {}

  render() {
    console.log(this.props.gifs)
    return (
      <ul>
        {this.props.gifs.map((gif, idx)=>{
          return <li key={idx}><img src={gif.images.original.url} alt={`${this.props.query} gif ${idx + 1}`} /></li>
        })}
      </ul>
    );
  }
}

export default GifList