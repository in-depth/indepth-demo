import React from 'react'
import { Link } from 'react-router'

const ShowsList = (props) => {
  return (
    <ul>
      {props.order.map((showId) => (
        <li key={showId}>
          <Link to={`/shows/${showId}`}>
            <h1>{props.shows[showId].title}</h1>
          </Link>
          <i>{props.shows[showId].date}</i>
        </li>
      ))}
    </ul>
  )
}

ShowsList.propTypes = {
  shows: React.PropTypes.object.isRequired,
  order: React.PropTypes.array.isRequired,
}

export default ShowsList
