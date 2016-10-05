import React from 'react'
import { Link } from 'react-router'

import { List, ListItem } from 'react-toolbox/lib/list'

import style from './CollectionItemAssets.css'

const CollectionItemAssets = (props) => {
  const assetTypes = Object.keys(props.assets)
  return (
    <List selectable ripple>
      {assetTypes.map(typeName =>
        <Link key={typeName} to={`/collection/${props.itemId}/${typeName}`}>
          <ListItem
            leftIcon="3d_rotation"
            caption={typeName}
            theme={style}
          />
        </Link>
      )}
    </List>
  )
}

// <div key={typeName}><Link to={`/collection/${props.itemId}/${typeName}`}>{typeName}</Link></div>

CollectionItemAssets.propTypes = {
  itemId: React.PropTypes.string,
  assets: React.PropTypes.object,
}

export default CollectionItemAssets
