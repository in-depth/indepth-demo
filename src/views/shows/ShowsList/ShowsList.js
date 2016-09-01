import React from 'react'
import { Link } from 'react-router'

const ShowsList = (props) => {
  return (
    <ul>
      {props.order.map((showId) => (
        <li key={showId}>
          <Link to={`/shows/${showId}`}>
            {props.shows[showId].title}
          </Link>
          <p>{props.shows[showId].date}</p>
          <p>{props.shows[showId].description}</p>
        </li>
      ))}
    </ul>
  )
}

export default ShowsList
