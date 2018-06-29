import React from 'react';

class GifList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map(gif => (
          <li><img src={gif.images.original.url} style={{width: 300, height: 400}} /></li>
        ))}
      </ul>
    )
  }
}

export default GifList
