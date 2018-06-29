import React from "react" 

import GifList from "../components/GifList"
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    search: "search"
  }

  clear = () => this.setState({ search: "" }) 

  handleChange = (e) => this.setState({ search: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    let url=`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url)
      .then(r=>r.json())
      .then(r=>r.data.map(gif => gif.images.original.url).slice(0,3))
      .then(gifs=> this.setState({gifs}))
      .then(r => console.log(this.state.gifs))
  }

  render() {
    return(
      <div>
        <GifSearch
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          clear={this.clear}
        />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer
