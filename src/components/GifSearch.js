import React from 'react'

class GifSearch extends React.Component {

  constructor(props) {
    super(props)

  }



  render() {
    return (
      <div>
        <form onSubmit={this.props.searchValue}>
          <input onChange={this.props.inputValue} type="text" name="name" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default GifSearch
