import React from 'react'
import { Link } from 'react-router'

import { Card, CardMedia, CardTitle } from 'react-toolbox/lib/card'

import styles from './CollectionItemsList.css'

const CollectionItemsList = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.sortMenu}>
        <div className={styles.sortOpts}>
          <span>{'View:'}</span>
          <i className="material-icons">view_list</i>
          <i className="material-icons">view_module</i>
          <span>{'Sort by: '}</span>
          <Link to="/collection?orderBy=id">id</Link>
          {'|'}
          <Link to="/collection?orderBy=title">title</Link>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.cardsContainer}>
          {props.order.map((itemId) => (
            <Link className={styles.cardLinkWrapper} to={`/collection/${itemId}`} key={itemId}>
              <Card className={styles.card}>
                <CardMedia
                  aspectRatio="wide"
                  image={props.collectionItems[itemId].image.url}
                />
                <CardTitle
                  className={styles.cardTitle}
                  title={props.collectionItems[itemId].title}
                  subtitle={`${props.collectionItems[itemId].shortDesc.substr(0, 30)}...`}
                />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

CollectionItemsList.propTypes = {
  collectionItems: React.PropTypes.object.isRequired,
  order: React.PropTypes.array.isRequired,
  updateOrder: React.PropTypes.func,
}

export default CollectionItemsList
