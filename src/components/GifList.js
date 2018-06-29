import React from 'react';

const GifList = (props) => {
    return (
        <div>
            <ul>
                {props.gifs.map(gif => {
                   return <li key={gif.id}>
                        <img src={gif.images.fixed_width.url} alt={gif.title}/>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default GifList