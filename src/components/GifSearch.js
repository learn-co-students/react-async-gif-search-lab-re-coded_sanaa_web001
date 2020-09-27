import React, {Component } from 'react'

class GifSearch extends Component {
  state = {
    searchItem: ""
  };
  
  handleChange = event => {
  this.setState({
    searchItem: event.target.value
  })
};
handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.searchItem)
  };

  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
        <input type="text" style={{marginLeft: '50%'}} id="search" value={this.state.searchItem} onChange={this.handleChange}/>
      </form>
      </div>
  )
}
}
export default GifSearch;
