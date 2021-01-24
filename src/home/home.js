import React, { Component } from 'react'
import './home.css'

class Home extends Component {
  render () {
    return (
        <div className="Home">
            <h1>Hello people of Solita</h1>
            <h3>There was four exercises</h3>
            <ul>
                <li>1. List names and amounts, order by amount, most popular first</li>
                <li>2. List names in alphabetical order</li>
                <li>3. Return the total amount of all the names</li>
                <li>4. Return the amount of the name given as a parameter</li>
            </ul>
            <h2>You can check them from the top!</h2>
        </div>
    )
  }
}

export default Home
