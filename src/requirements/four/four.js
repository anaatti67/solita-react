import nameData from '../../names/names.json'
import { Component, React } from 'react'
import './four.css'

// const { names } = nameData

class Four extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      foundName: '',
      foundAge: ''
      // foundMatch: false
    }
    this.nameHandler = this.nameHandler.bind(this)
  }

  nameHandler (event) {
    this.setState({ value: event.target.value })
    const nameFound = event.target.value
    for (const x of nameData.names) {
      if (x.name === nameFound) {
        this.setState({ foundName: x.name })
        this.setState({ foundAge: x.amount })
        // this.setState({ foundMatch: true })
      } else {
        // this.setState({ foundMatch: false })
      }
    }
  }

  render () {
    return (
        <div className="Four">
          <h1>Here you can search people wokring in Solita and see how many there are!</h1>
          <h2>Just write the name you want to find and remember to use capital letter!</h2>
            <input type="text" placeholder="Name for example Ville" name="name" onChange={this.nameHandler}></input>
            <p>
              {'Name: ' + this.state.foundName}
            </p>
            <p>
            {' Amount: ' + this.state.foundAge}
            </p>
        </div>
    )
  }
}

export default Four
