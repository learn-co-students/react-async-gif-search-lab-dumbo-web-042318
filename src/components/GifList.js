import React from "react" 

const GifList = (props) => {
  return (
    <ul>
      {props.gifs.map(url => <li><img src={url} alt="gif preview" /></li>)}
    </ul>
  )
}

export default GifList
