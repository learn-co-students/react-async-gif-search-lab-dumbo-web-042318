import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    inputValue: ''
  }

  findTheSearchItem = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.inputValue}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(r => r.json())
      .then(gifs =>
        this.setState({
          gifs: gifs.data.slice(6,9)
    }))
  }

  componentDidMount () {
    if (this.state.inputValue === '') {
      this.state.inputValue = 'welcome';
      this.findTheSearchItem();
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.findTheSearchItem()
  }

  handleOnChange = (e) => {
    e.persist()
      const input = e.target.value
      this.setState({
        inputValue: input
      })
    }

  render () {
    return (
    <div>
      <GifSearch handleChange={this.handleOnChange} handleForm={this.handleOnSubmit} />
      <GifList gifs={this.state.gifs} />
    </div>
    )};
}

  export default GifListContainer
