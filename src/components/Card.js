import React, {Component} from 'react'

const Card = (props) => (
  <div className="Card-Box">
    <ul>
      <li>
        <p> key/id = { props.id } </p>
        <p> title = { props.title } </p>
        <p> assingnedTo = { props.assignedTo } </p>
        <p> status = {props.status } </p>
        <p> createdAt = { props.createdAt } </p>
        <p> createdBy = { props.createdBy } </p>
        <p> priority = { props.priority } </p>
        <p> updatedAt = { props.updatedAt } </p>
      </li>
    </ul>
  </div>

)

export default Card;