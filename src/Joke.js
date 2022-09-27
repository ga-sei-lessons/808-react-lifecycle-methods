import React, { Component } from 'react'
import axios from 'axios'

export default class Joke extends Component {

    state = {
        joke: ''
    }

    // runs only once -- when the component is first being created and mounted on the virtual DOM
    async componentDidMount() {
        // most commonly use lifecycle method
        // used for getting API info to display on page load
        // const options = {
        //     headers: {
        //         Accept: 'application/json'
        //     }
        // }
        // axios.get('https://icanhazdadjoke.com/', options)
        //     .then(response => {
        //         console.log('the API has responded!')
        //         this.setState({ joke: response.data.joke })
        //     })
        //     .catch(console.warn)
        try {
            const options = {
                headers: {
                    Accept: 'application/json'
                }
            }
            const response = await axios.get('https://icanhazdadjoke.com/', options)
            this.setState({ joke: response.data.joke })
        } catch(err) {
            // good practice inform the user
            this.setState({ joke: 'oh no! there was an error' })
            console.warn(err)
        }
    }

    // runs everytime the component is being re-rendered
    componentDidUpdate() {
        // setting state here can cause an infinite loop
        console.log('Joke.js did update')
        // always will have access to accurate state information
        console.log('Joke.js\'s current state:', this.state)
    }

    // runs when the component is unmounted -- runs when component is removed from virtual DOM
    componentWillUnmount() {
        console.info('Joke.js is unmounting!')
    }

    handleChangeJoke = () => {
        const options = {
            headers: {
                Accept: 'application/json'
            }
        }
        axios.get('https://icanhazdadjoke.com/', options)
            .then(response => {
                console.log('the API has responded!')
                this.setState({ joke: response.data.joke })
            })
            .catch(console.warn)
    }

    render() {
        console.log('Joke.js is rendering!')
        return (
            <div>
                <h1>Bad joke:</h1>

                <p>{this.state.joke}</p>

                <button
                    onClick={this.handleChangeJoke}
                >
                    tell me another bad joke
                </button>
            </div>
        )
    }
}