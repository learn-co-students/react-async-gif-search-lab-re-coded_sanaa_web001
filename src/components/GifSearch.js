import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor(props){
    super(props)
    this.state= {
      query: ''
    }
  }
  handleSearch = (e)=> {
      e.preventDefault();
      this.props.handleSearch(this.state.query)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <p>enter a search term</p>
        <input type="search" onChange={(e)=> this.setState({query: e.target.value})} value={this.state.query}/>
        <button>search</button>
        </form>
      </div>
    )
  }
}