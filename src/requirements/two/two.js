
import React from 'react'
import nameData from '../../names/names.json'
import * as ReactBootStrap from 'react-bootstrap'

const { names } = nameData

const Two = () => {
  names.sort((a, b) => (a.name > b.name) ? 1 : -1)
  const renderEmployees = (employee, index) => {
    return (
      <tr key={index}>
        <td>{employee.name}</td>
      </tr>
    )
  }

  return (
    <div>
      <ReactBootStrap.Table size="sm" striped bordered hover>
  <thead >
    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    {names.map(renderEmployees)}
  </tbody>
  </ReactBootStrap.Table>
</div>
  )
}

export default Two
