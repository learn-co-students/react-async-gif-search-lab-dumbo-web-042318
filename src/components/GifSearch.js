import React from 'react'

const GifSearch = (props) => {
    return (
        
        <form className="search-form" onSubmit={props.searchHandler }>
            <label>Enter What Thine Heart Desires!</label>
            <br/>
            <input value={props.searchTerm} onChange={props.inputChange} type="text" placeholder="Search..."/>
            {/* <input type="submit" value={props.searchTerm} /> */}
        </form>
       
    )
}

export default GifSearch;