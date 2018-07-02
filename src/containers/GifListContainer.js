import React, {Component} from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor() {
        super()

        this.state = {
            input: '',
            gifs: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.input !== this.state.input) {
            this.getGifs(this.state.input)
            
        }
    }

    getGifs(input) {
        const URL = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`
        return fetch(URL)
            .then(r => r.json())
            .then(gifs => {
                const gifsArray = gifs.data
                console.log(gifsArray)
                this.setState({
                    gifs: [gifsArray[0], gifsArray[1], gifsArray[2]] 
                })
            })
        }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        const gifs = this.state.gifs.filter( n => n)
        const giflist = gifs.length > 0 ? gifs.map( gif => <li key={gif.id}><img src={gif.images.original.url} alt={gif.title} /></li> ) : []

        return (
            <div className='gif-list-container'>
                < GifSearch handleChange={this.handleChange} />
                < GifList gifs={giflist} />
            </div>
        )
    }
}

export default GifListContainer
