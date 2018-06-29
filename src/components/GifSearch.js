import React from 'react'

class GifSearch extends React.Component{


  render(){
    //console.log(this.props)
    return(
      <div>
        <form onSubmit={this.props.onHandle}>
          <input onChange={this.props.onSearch} type='text' placeholder='search'/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}


export default GifSearch
