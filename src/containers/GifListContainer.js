import React from 'react'

import GifSearch from '../components/GifSearch'

import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      searchterm: "",
      gifs: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.fetchGifs(this.state.searchterm)
    // console.log(e.target.firstElementChild.value);
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      searchterm: e.target.value
    })
  }

  fetchGifs = (searchterm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchterm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(resp => this.setState({
      gifs: resp.data.splice(0,3)
    }))
  }

  componentDidMount(){
    this.fetchGifs('hello')
  }


  render() {
    console.log(this.state);
    return (
      <div>
        < GifSearch searchValue={this.handleSubmit} inputValue={this.handleChange}/>
        < GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer
