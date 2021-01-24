import React from 'react'
import nameData from '../../names/names.json'
import * as ReactBootStrap from 'react-bootstrap'

const { names } = nameData

const One = () => {
  names.sort((a, b) => (a.amount < b.amount) ? 1 : -1)
  const renderEmployees = (employee, index) => {
    return (
      <tr key={index}>
        <td>{employee.name}</td>
        <td>{employee.amount}</td>
      </tr>
    )
  }

  return (
    <div>
      <ReactBootStrap.Table size="sm" striped bordered hover>
  <thead >
    <tr>
      <th>Name</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    {names.map(renderEmployees)}
  </tbody>
  </ReactBootStrap.Table>
</div>
  )
}

export default One
