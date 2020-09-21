import React, { Component } from 'react'

export default class GifSearch extends Component {

    constructor(){
        super()
        this.state={
            search:" "
        }
    }
    handleChange =(event)=>{
        this.setState({
            search:event.target.value
        })
    }
    
    handleSubmit =(e)=>{
        e.preventDefault()
        this.props.onSearch(this.state.search)
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
        <input type="text" name="first input" value={this.state.search} onChange={this.handleChange}/>
        <input type="submit" />
      </form>
            </div>
        )
    }
}
