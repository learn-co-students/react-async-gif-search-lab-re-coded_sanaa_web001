import React from 'react'

function GifList(props) {
    let gifArray = props.gifs.map((gifObj) => <li><img alt={gifObj.images.original.url} src={gifObj.images.original.url} /></li>)
    console.log("gif array: ", gifArray)
    return (
        <ul>
            {gifArray}
        </ul>
    )
}

export default GifList