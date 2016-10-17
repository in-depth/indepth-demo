import React from 'react'
import { Link } from 'react-router'

import styles from './ShowList.css'

const backgroundColor = (index) => {
  if (index % 2 === 0) { return { backgroundColor: '#efeeee' } }
  return { backgroundColor: 'white' }
}

const ShowsList = (props) => {
  return (
    <div>
      <h2 className={styles.month}>NOVEMBER</h2>
      {props.order.map((showId, index) => (
        <div key={showId} style={backgroundColor(index)}>
          <Link className={styles.showItem} to={`/events/${showId}`}>
            <img className={styles.image} alt={props.shows[showId].title} src={props.shows[showId].imageUrl} />
            <div className={styles.showText}>
              <h3 className={styles.showHeader}>{props.shows[showId].title}</h3>
              <p>{props.shows[showId].date}</p>
              <p>{props.shows[showId].time}</p>
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
