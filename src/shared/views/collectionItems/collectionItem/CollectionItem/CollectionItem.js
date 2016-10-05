import React from 'react'

import { CollectionItemHeader, CollectionItemStats, CollectionItemAssets } from '../index'

const CollectionItem = (props) => {
  return (
    <div>
      <CollectionItemHeader title={props.title} image={props.image} assets={props.assets} />
      <CollectionItemStats type={props.type} subType={props.subType} classifications={props.classifications} />
      <CollectionItemAssets itemId={props.itemId} assets={props.assets} />
    </div>
  )
}

CollectionItem.propTypes = {
  itemId: React.PropTypes.string,
  image: React.PropTypes.object.isRequired,
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  subType: React.PropTypes.string.isRequired,
  classifications: React.PropTypes.array.isRequired,
  assets: React.PropTypes.object,
}

export default CollectionItem
