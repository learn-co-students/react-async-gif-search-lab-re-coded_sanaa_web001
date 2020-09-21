import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends Component {

    //api key rwwiek5csU0nuHK07CjV5o3ZDI4mR57V
    
    constructor(){
        super()
        this.state ={
            search: " ",
            gifList:[]
        }
    }
    getGifs =(search)=>{
        fetch(`api.giphy.com/v1/gifs/search?q=${search}&api_key=rwwiek5csU0nuHK07CjV5o3ZDI4mR57V`)
        .then(response =>response.json())
        .then(gifs => this.list(gifs.data))
    }

    componentDidMount (){
        this.getGifs();
    }
    onSearch = (text) => {
        this.setState({search: text}, () => this.getGifs(this.state.search))
      }

    list =(gifs)=>{
        let gifList =gifs.slice(0,3)
        this.setState({gifList})
    }
   
    render() {
        const gif = this.state.gifList.map(gif => <li><GifList gif={gif} /></li>);
        return (
            <div>
                <GifSearch onSearch={this.onSearch}/>
                {gif}
            </div>
        )
    }
}
