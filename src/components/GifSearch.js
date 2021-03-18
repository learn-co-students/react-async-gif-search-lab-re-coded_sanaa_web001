import React from "react"



class GiftSearch extends React.component{
  constructor(props){
    super()
    state={
      query:""
    }
   
  }
  
  render(){
    const handleChange=(e)=>{
  this.setState({query: event.target.value})
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }
   
    return(
      <div>
       <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </form>
    
      </div>
      )
  }
}

export default GiftSearch