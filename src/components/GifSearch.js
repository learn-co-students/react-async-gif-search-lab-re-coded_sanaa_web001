import React from 'react'

class GifSearch extends React.Component {

  state = {}

  render() {
    return (
      <div>
        <form onSubmit={this.props.submitQuery}>
          <h4>Enter a Search Term:</h4>
          <input type='text' name='query' placeholder='Search Gifs'/><br/>
          <input type='submit' value='Find Gifs'/>
        </form>
      </div>
    );
  }
}

export default GifSearch