import React from 'react'
import { Link } from 'react-router'

import styles from './ShowList.css'

const ShowsList = (props) => {
  return (
    <div>
      {props.order.map((showId) => (
        <div key={showId}>
          <Link className={styles.showItem} to={`/events/${showId}`}>
            <img className={styles.image} alt={props.shows[showId].title} src={props.shows[showId].imageUrl} />
            <div className={styles.showText}>
              <h3>{props.shows[showId].title}</h3>
              <i style={{ padding: '0 20px' }}>{props.shows[showId].date}</i>
              <i style={{ padding: '0 20px' }}>{props.shows[showId].time}</i>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

ShowsList.propTypes = {
  shows: React.PropTypes.object.isRequired,
  order: React.PropTypes.array.isRequired,
}

export default ShowsList
//
//
// <ListItem
//   className={styles.showItem}
//   avatar={props.shows[showId].imageUrl}
//   caption={props.shows[showId].title}
//   legend={`${props.shows[showId].shortDesc.substr(0, 80)}...`}
// />
// <p>{`${props.shows[showId].shortDesc.substr(0, 80)}...`}</p>
