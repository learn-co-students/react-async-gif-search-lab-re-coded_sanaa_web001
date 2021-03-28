import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    GetItems: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.GetItems)
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} style={{display:"grid"}}>
        Enter a search term
          <input style={{ padding:"5px"}} type="text" value={this.state.GetItems} onChange={event => this.setState({GetItems: event.target.value})} />
          <button style={{background:"green", color:"white", padding:"5px"}} type="submit" >find </button>
        </form>
      </div>
    )
  }

}

export default GifSearch