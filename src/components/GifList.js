import React from 'react'
import GifListContainer from '../containers/GifListContainer'

const GifList = props =>
  <ul>
    {props.gifs.map(g => (
      <li><img src={g.images.original.url} alt='' ></img></li>
    ))}
  </ul>

  export default GifList
