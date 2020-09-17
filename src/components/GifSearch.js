import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        query : ""
    }
    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            search: event.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.fetching(this.state.query)

    }
    render() {
        return (
            <div>
                <form onSubmit={event =>this.setState.handleSubmit(event)}>
                    <input
                    type="text"
                    name="search"
                    value={this.state.query}
                    onChange={event => this.handleChange(event)}
                    />
                </form>
            </div>
        )
    }
}
