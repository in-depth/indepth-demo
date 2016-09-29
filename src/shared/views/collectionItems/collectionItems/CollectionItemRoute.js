import React from 'react'
import Button from 'react-toolbox/lib/button'

import { CollectionItemsListContainer } from './index'

const CollectionItemsRoute = (props) => {
  return (
    <div>
      <Button>Cool</Button>
      <CollectionItemsListContainer orderBy={props.location.query.orderBy} />
    </div>
  )
}

CollectionItemsRoute.propTypes = {
  location: React.PropTypes.object,
}


export default CollectionItemsRoute
