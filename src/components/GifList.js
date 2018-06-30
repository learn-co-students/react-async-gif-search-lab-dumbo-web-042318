import React from 'react'

class GifList extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const gifs = this.props.gifs.map(gif => {
      return <li key={gif.id}> <img src={gif.images.fixed_height.url} alt=""/></li>
    })
    console.log(gifs);
    return (
      <div>
        <ul  style={{ listStyleType: "none" }}>
          { gifs }
        </ul>
      </div>
    )
  }
}

export default GifList
