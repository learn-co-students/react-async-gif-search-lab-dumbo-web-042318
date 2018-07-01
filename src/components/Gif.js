import React from 'react';

const Gif = (props) => {
  return(
    <div>
      <img src={props.gif.images.original.url} alt='gif'/>
    </div>
  )
}

export default Gif;
