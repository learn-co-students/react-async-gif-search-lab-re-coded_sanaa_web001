import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gifs : [],
            API : 'https://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC&rating=g'
        }
    }

    handlechange = e => {
        this.setState({
            API : `https://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=dc6zaTOxFJmzC&rating=g`
        })
    }

    componentDidMount() {
        fetch(this.state.API)
        .then(response => response.json())
        .then(response => this.setState({
            gifs : response.data.slice(0, 3)
        }))
    }

    componentDidUpdate() {
        fetch(this.state.API)
        .then(response => response.json())
        .then(response => this.setState({
            gifs : response.data.slice(0, 3)
        }))
    }

    render() {
        return (
            <div>
                <GifSearch handlechange={this.handlechange} />
                { this.state.gifs.length ? this.state.gifs.map((gif, idx) => <GifList key={idx} gif={gif} />) : null }
            </div>
        )
    }
}
