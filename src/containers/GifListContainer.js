import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      savedSearch: ''
    }
  }

  componentDidMount(){
    this.fetchData("frogs")
  }

  fetchData = (searchInput) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=dc6zaTOxFJmzC&rating=g`).then(res => res.json()).then(res => {
      this.setState({
        data: res.data.slice(0,3)
      })
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchData(this.state.savedSearch)
  }

  handleOnchange = (e) => {
    const input = e.target.value
    this.setState({
      savedSearch: input
    })
  }
  render(){
    //console.log(this.state)
    return(
      <div>
        <GifSearch onHandle={this.handleSubmit}
                  onSearch={this.handleOnchange}
        />
        <GifList gifs={this.state.data}/>
      </div>
    )
  }


}

export default GifListContainer
