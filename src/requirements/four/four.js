// import nameData from '../../names/names.json'
import { Component, React } from 'react'

// const { names } = nameData

class Four extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.nameHandler = this.nameHandler.bind(this)
  }

  nameHandler (event) {
    this.setState({ value: event.target.value })
    const nameFound = event.target.value
    console.log(nameFound)
  }

  render () {
    return (
        <div className="Four">

            <input type="text" name="name" onChange={this.nameHandler}></input>
            <button onClick={this.nameHandler} className="btn btn-primary">Search</button>
        </div>
    )
  }
}

export default Four
