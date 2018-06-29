import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      link: null,
      gifs: []
    }
  }


  handleSearchSubmit = (event) => {
    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target.firstElementChild.value}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(resp => resp.json())
      .then(resp => this.setState(
        {
        gifs: resp.data
        }
      ))
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <GifSearch handleSubmit={this.handleSearchSubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;
