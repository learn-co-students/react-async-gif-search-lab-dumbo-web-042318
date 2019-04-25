import React from 'react';
import PropTypes from 'prop-types';

const GifList = ({ gifs }) => (
  <ul style={{ listStyle: "none" }}>
    {gifs.map(gif => (
      <li key={gif}><img src={gif} alt="search" /></li>
    ))}
  </ul>
);

GifList.propTypes = {
  gifs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GifList;
