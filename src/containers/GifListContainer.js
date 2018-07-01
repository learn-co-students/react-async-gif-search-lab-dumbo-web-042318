import React from 'react';
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      gifsData: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }


  fetchData() {
    fetch('http://api.giphy.com/v1/gifs/search?q=simpsons&api_key=dc6zaTOxFJmzC&rating=g')
      .then(resp => resp.json())
      .then(gifs => {
        this.setState({
          gifsData: gifs.data
      })
    })
  }

  render() {
    return(
      <GifList gifs={this.state.gifsData}/>
    )
  }
}

export default GifListContainer;
