import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';
import NavBar from '../components/NavBar';

class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifData: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
    }

    fetchData = (term) => {
        const url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC&rating=g'
        const encodedUrl = encodeURI(url)
        fetch(encodedUrl)
            .then(resp => resp.json())
            .then(gifs => this.setState({gifData: gifs.data}))
    }

    searchHandler = (e) => {
        e.preventDefault()
        this.fetchData(this.state.searchTerm)
        this.setState({
            searchTerm: ''
        })
    }
    
    searchChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        console.log(this.state.gifData)
        return (
            <div>
                <NavBar />
                <GifSearch searchTerm={this.state.searchTerm} inputChange={this.searchChange} searchHandler={this.searchHandler}/>
                <GifList gifs={this.state.gifData} />
            </div>
        )
    }

}

export default GifListContainer;