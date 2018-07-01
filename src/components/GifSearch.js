import React from 'react'
import GifListContainer from '../containers/GifListContainer'

const GifSearch = props =>

    <form onSubmit={props.handleForm} >
      <div>Enter a Search Term:</div>
    <div>
      <input onChange={props.handleChange} type="text" id="some_input" />
    </div>
    <div>
      <input class="submit" type="submit" value="Find Gifs" />
    </div>
    </form>



  export default GifSearch
