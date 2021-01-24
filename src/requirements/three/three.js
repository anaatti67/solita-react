
import React from 'react'
import nameData from '../../names/names.json'
import * as ReactBootStrap from 'react-bootstrap'

const { names } = nameData

const Three = () => {
  const summary = names.map(sum => sum.amount).reduce((a, b) => a + b)
  console.log(summary)
  return (
    <div>
      <ReactBootStrap.Table size="sm" striped bordered hover>
  <thead>
    <tr>
      <th>Total amount of the names</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {summary}
    </tr>
  </tbody>
  </ReactBootStrap.Table>
</div>
  )
}

export default Three
