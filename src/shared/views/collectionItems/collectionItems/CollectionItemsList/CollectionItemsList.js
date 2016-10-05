import React from 'react'
import { Link } from 'react-router'

import { List, ListItem } from 'react-toolbox/lib/list'

import style from './CollectionItemsList.css'

const CollectionItemsList = (props) => {
  return (
    <div>
      <p><b>Collection items</b></p>
      Order by: <Link to="/collection?orderBy=id">id</Link> | <Link to="/collection?orderBy=title">title</Link>
      <List selectable ripple>
        {props.order.map((itemId) => (
          <Link to={`/collection/${itemId}`}>
            <ListItem
              avatar={props.collectionItems[itemId].image.url}
              caption={props.collectionItems[itemId].title}
              legend={`${props.collectionItems[itemId].shortDesc.substr(0, 50)}...`}
              theme={style}
            />
          </Link>
        ))}
      </List>
    </div>
  )
}

// {/*<li key={itemId}><Link to={`/collection/${itemId}`}>{props.collectionItems[itemId].title}</Link></li>*/}


CollectionItemsList.propTypes = {
  collectionItems: React.PropTypes.object.isRequired,
  order: React.PropTypes.array.isRequired,
  updateOrder: React.PropTypes.func,
}

export default CollectionItemsList
