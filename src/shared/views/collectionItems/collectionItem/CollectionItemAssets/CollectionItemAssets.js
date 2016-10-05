import React from 'react'
import { Link } from 'react-router'

const CollectionItemAssets = (props) => {
  const assetTypes = Object.keys(props.assets)
  return (
    <div>
      {assetTypes.map(typeName => <div key={typeName}><Link to={`/collection/${props.itemId}/${typeName}`}>{typeName}</Link></div>)}
    </div>
  )
}

CollectionItemAssets.propTypes = {
  itemId: React.PropTypes.string,
  assets: React.PropTypes.object,
}

export default CollectionItemAssets
