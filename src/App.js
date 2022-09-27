import React, { Component } from 'react'
import Joke from './Joke'

export default class App extends Component {
  render() {
    // render is invoked on component mount and update
    console.log('App.js is rendering!')

    return (
      <div>
        <Joke />
      </div>
    )
  }
}