import React from 'react';
import Gif from './Gif'


const GifList = (props) => {

  const gifCard = props.gifs.map(gif => {
    return <Gif key={gif.id} gif={gif}/>
  })

  return(
    <div>
      <div>
        <ul>
          {gifCard}
        </ul>
      </div>
    </div>
  )
}

export default GifList;
