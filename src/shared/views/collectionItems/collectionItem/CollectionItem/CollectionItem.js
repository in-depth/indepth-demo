import React from 'react'

import { CollectionItemHeader, CollectionItemStats, CollectionItemAssets, CollectionItemDetail } from '../index'
import style from './CollectionItem.css'


const CollectionItem = (props) => {
  return (
    <div className={style.page}>
      <CollectionItemHeader image={props.image} assets={props.assets} />
      <br />
      <CollectionItemStats
        title={props.title}
        type={props.type} subType={props.subType}
        classifications={props.classifications}
        shortDesc={props.shortDesc}
      />
      <CollectionItemAssets
        itemId={props.itemId}
        assets={props.assets}
      />
      <CollectionItemDetail fullDesc={props.fullDesc} />
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
  shortDesc: React.PropTypes.string,
  fullDesc: React.PropTypes.array,
}

export default CollectionItem
