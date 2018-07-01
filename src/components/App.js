import React from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer';
import GifSearch from './GifSearch'


// the App component should render out the GifListContainer component

class App extends React.Component {
  render() {
    return (
      <div>
          <NavBar color='black' title="Giphy Search" />
          <GifSearch />
          <GifListContainer />
      </div>
    )
  }
}

export default App;
