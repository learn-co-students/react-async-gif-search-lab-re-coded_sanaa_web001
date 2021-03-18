import React from "react"



class GiftList extends React.component{
  constructor(props){
    super()
   
  }
  
  render(){
   
    return(
      <div>
     {props.gifs.map(gif=> <img src={gif.url})}
      </div>
      )
  }
}

export default GiftList