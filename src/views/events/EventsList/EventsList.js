import React from 'react'
import { Link } from 'react-router'

const EventsList = (props) => {
  return (
    <ul>
      {props.events.map((event, i) => {
        return (
          <li key={i}>
            <Link to="/">
              <h1>{event.title}</h1>
            </Link>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </li>
        )
      })}
    </ul>
  )
}



export default EventsList
