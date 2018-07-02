import React from 'react'

const GifSearch = (props) => {
    return <form onChange={props.handleChange}>
        <label htmlFor="search"></label>
        <input type="text" id="search" />
    </form>
}

export default GifSearch