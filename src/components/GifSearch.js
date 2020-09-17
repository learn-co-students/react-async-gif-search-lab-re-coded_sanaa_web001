import React from 'react';

class GifSearch extends React.Component {

  state = {
    searchTerm: "",
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateSearchTerm(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} name={this.state.searchTerm}></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default GifSearch;