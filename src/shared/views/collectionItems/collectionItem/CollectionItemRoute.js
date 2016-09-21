import React from 'react'

import { CollectionItemContainer } from './index'

const CollectionItemRoute = (props) => {
  return (
    <div>
      <CollectionItemContainer id={props.params.id} />
    </div>
  )
}

CollectionItemRoute.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
}

export default CollectionItemRoute
