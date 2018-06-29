import React from 'react'

const GifSearch = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" 
        value={props.value}
        onChange={props.handleChange}
        onClick={props.clear}
      />
      <input 
        type="submit"
      />
    </form>
  )
}

export default GifSearch
