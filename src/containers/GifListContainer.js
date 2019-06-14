import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends Component {
  constructor(){
    super()

    this.state = {
      gifs: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    this.searchForGiphy('hello')
  }

  searchForGiphy(searchQuery){
    const encodedQuery = encodeURI(searchQuery)
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodedQuery}&api_key=dc6zaTOxFJmzC&rating=g`

    fetch(url)
      .then(r => r.json())
      .then(r =>
        this.setState({
        gifs: r.data.slice(0, 3)
      })
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.searchTerm)
    this.searchForGiphy(this.state.searchTerm)
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render(){
    // console.log(this.state)
    return (
      <div>
        <GifSearch gifSearch={this.handleSubmit} gifInput={this.handleChange}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer;
