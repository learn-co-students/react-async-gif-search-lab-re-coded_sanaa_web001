import React, { Component } from 'react'

export default class GifSearch extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.props.handlechange} />
                </form>
            </div>
        )
    }
}
