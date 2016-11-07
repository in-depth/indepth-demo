import React from 'react'
import { Link } from 'react-router'

import styles from './ShowList.css'

const backgroundColor = (index) => {
  if (index % 2 === 0) { return { backgroundColor: '#efeeee' } }
  return { backgroundColor: 'white' }
}

const colors = ['#2ecc71', '#3498db', '#e74c3c', '#e67e22', '#f1c40f', '#9b59b6']

const colorPicker = () => {
  const number = Math.floor(Math.random() * 6)
  return colors[number]
}

const ShowsList = (props) => {
  console.log(props.shows[1].imageUrl)
  return (
    <div className={styles.ShowListFullPage}>
      <div className={styles.header}>
        <h1 className={styles.eventTitle}>EVENTS</h1>
      </div>
      <h2 className={styles.month}>NOVEMBER</h2>
      <div className={styles.eventsList}>
        {props.order.map((showId, index) => (
          <div className={styles.linkWrapper} key={showId} style={backgroundColor(index)}>
            <Link className={styles.showItem} to={`/events/${showId}`}>
              <div className={styles.image} style={{ backgroundImage: `url(${props.shows[showId].imageUrl})`, backgroundColor: `${colorPicker()}` }}>
                  <span className={styles.dateDay}>{props.shows[showId].day}</span>
                  <span className={styles.dateMonth}>{props.shows[showId].month}</span>
              </div>
              <div className={styles.showText}>
                <h3 className={styles.showHeader}>{props.shows[showId].title}</h3>
                <p className={styles.shortDesc}>{props.shows[showId].shortDesc}</p>
                <p className={styles.time}>{props.shows[showId].time}</p>
                <p className={styles.date}>{props.shows[showId].date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

ShowsList.propTypes = {
  shows: React.PropTypes.object.isRequired,
  order: React.PropTypes.array.isRequired,
}

export default ShowsList
