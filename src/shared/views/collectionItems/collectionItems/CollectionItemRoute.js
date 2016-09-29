import React from 'react'

import { CollectionItemsListContainer } from './index'

const CollectionItemsRoute = (props) => {
  return (
    <div>
      <CollectionItemsListContainer orderBy={props.location.query.orderBy} />
    </div>
  )
}

CollectionItemsRoute.propTypes = {
  location: React.PropTypes.object,
}


export default CollectionItemsRoute
