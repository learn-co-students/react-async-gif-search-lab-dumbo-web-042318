import React from 'react';
import PropTypes from 'prop-types';

const GifSearch = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div className="form-group">
      <label htmlFor="searchTerm">Enter a Search Term</label>
      <input type="text" className="form-control" id="searchTerm" placeholder="Search Term" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
);

GifSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default GifSearch;
