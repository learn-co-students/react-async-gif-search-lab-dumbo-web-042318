import React from 'react';

class GifSearch extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" />
        <input type="submit" />
      </form>
    )
  }
};


export default GifSearch;
