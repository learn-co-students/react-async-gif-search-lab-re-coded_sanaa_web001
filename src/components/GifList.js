import React from "react";

const GifList = props => {
  //component takes passed down props from state
  return (
    <div>
      <ul>
        {props.data.map(singleGif => (
          <li key={singleGif}>
            <img src={singleGif} alt="gif" height="200" width="250" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GifList;
