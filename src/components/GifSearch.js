import React, { Component } from 'react'


class GifSearch extends Component {
  render(){
    return (
      <div className="form-group">
        <form onSubmit={this.props.gifSearch}>
          <label>Enter a Search Term</label>
          <input onChange={this.props.gifInput} type="text" name="search" placeholder="search" className="form-control"/>
          <input className="btn btn-success" type="submit" value="Find Gifs"/>
        </form>
      </div>
    )
  }
}

export default GifSearch;
