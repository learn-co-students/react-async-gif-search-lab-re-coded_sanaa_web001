import React from 'react'

function GifList (props) {
  return (
      <div>
        <ul>
         {props.gifs.map(obj=>
              <li><img src={obj.url} alt="GIF" /></li>
              )}
        </ul>
      </div>
  )
}

export default GifList;
