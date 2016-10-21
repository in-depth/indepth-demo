import React from 'react'
import { Link } from 'react-router'

import styles from './PlanItems.css'

const PlanItems = (props) => {
  const backgroundColor = (index) => {
    if (index % 2 === 0) {
      return { backgroundColor: '#efeeee' }
    }
    return null
  }

  return (
    <div className={styles.items}>
      <h2 className={styles.title}>COLLECTION ITEMS</h2>
      {props.items.map((itemId, index) => (
        <Link to={`/collection/${itemId}`} key={itemId}>
          <div key={itemId} style={backgroundColor(index)}>
            <div className={styles.item}>
              <img className={styles.image} alt={props.intinerary[itemId].title} src={props.intinerary[itemId].image.url} />
              <div className={styles.itemText}>
                <h3 className={styles.itemHeader}>{props.intinerary[itemId].title}</h3>
                <p><b>Exhibition: </b>{props.intinerary[itemId].exhibition}</p>
                <p>{`${props.intinerary[itemId].shortDesc.substr(0, 50)}...`}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

PlanItems.propTypes = {
  intinerary: React.PropTypes.object.isRequired,
  items: React.PropTypes.array.isRequired,
}

export default PlanItems
