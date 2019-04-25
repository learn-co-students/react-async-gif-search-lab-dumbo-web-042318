import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrls: [],
      searchTerm: '',
    };
  }

  // componentDidMount() {
  //   this.getData();
  // }

  getData() {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=C3IoHRHEMFpaWYA5Cl8RYD1dtsejDSED&rating=g`)
      .then(response => response.json())
      .then(data => this.grabFirstThreeGifs(data.data))
      .then(firstThreeGifUrls => this.setState({ imageUrls: firstThreeGifUrls }));
  }

  grabFirstThreeGifs(data) {
    const firstThreeGifUrls = [];

    if(data.length !== 0){
      for(let i = 0; i < 3; i++){
        firstThreeGifUrls.push(data[i].images.original.url);
      }
    }

    return firstThreeGifUrls;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target[0].value;
    this.setState({
      searchTerm: searchTerm,
    }, () => this.getData());
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.imageUrls} />
      </div>
    );
  }
}
