import React from 'react'
import { Link } from 'react-router'

import styles from './PlanItems.css'

const PlanItems = (props) => {
  const backgroundColor = (index) => {
    if (index % 2 === 0) {
      return { backgroundColor: '#F6F6F5' }
    }
    return null
  }

  return (
    <div className={styles.main}>
      <div className={styles.headerWrapper}>
        <h2 className={styles.title}>Collection Items</h2>
      </div>
      <div className={styles.itemsWrapper}>
        {props.items.map((itemId, index) => (
          <Link className={styles.itemLink} to={`/collection/${itemId}`} key={itemId}>
            <div className={styles.itemBackground} key={itemId} style={backgroundColor(index)}>
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
    </div>
  )
}

PlanItems.propTypes = {
  intinerary: React.PropTypes.object.isRequired,
  items: React.PropTypes.array.isRequired,
}

export default PlanItems
