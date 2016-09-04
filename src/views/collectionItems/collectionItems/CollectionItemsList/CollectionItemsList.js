import React from 'react'
import { Link } from 'react-router'

const CollectionItemsList = (props) => {
  return (
    <div>
      <p><b>Collection items</b></p>
      Order by: <Link to="/collection?orderBy=id">id</Link> | <Link to="/collection?orderBy=title">title</Link>
      {props.order.map((itemId) => (
        <li key={itemId}><Link to={`/collection/${itemId}`}>{props.collectionItems[itemId].title}</Link></li>
      ))}
    </div>
  )
}

CollectionItemsList.propTypes = {
  collectionItems: React.PropTypes.object.isRequired,
  order: React.PropTypes.array.isRequired,
  updateOrder: React.PropTypes.func,
}

export default CollectionItemsList
