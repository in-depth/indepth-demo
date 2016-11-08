import React from 'react'
import { Link } from 'react-router'

import styles from './CollectionItemAssets.css'

const iconSelector = (asset) => {
  const assetType = asset.typeName
  if (assetType === 'deepzoom') { return 'zoom_in' }
  if (assetType === 'models3d') { return '3d_rotation' }
  if (assetType === 'chat') { return 'chat_bubble_outline' }
  if (assetType === 'images') { return 'collections' }
  return 'cached'
}

const createAssetName = (asset) => {
  const assetType = asset.typeName
  if (assetType === 'deepzoom') { return 'DEEP ZOOM' }
  if (assetType === 'models3d') { return '3D MODEL' }
  if (assetType === 'chat') { return 'CHAT' }
  if (assetType === 'images') { return 'IMAGES' }
  return 'OTHER'
}

const CollectionItemAssets = (props) => {
  const assetTypes = Object.keys(props.assets)
  return (
    <div className={styles.main}>
      {assetTypes.map(typeName =>
        <Link key={typeName} to={`/collection/${props.itemId}/${typeName}`}>
          <div className={styles.asset}>
            <i className={`${styles.icon} material-icons`}>{iconSelector({ typeName })}</i>
            <span className={styles.text}>{createAssetName({ typeName })}</span>
          </div>
        </Link>
      )}
    </div>
  )
}

CollectionItemAssets.propTypes = {
  itemId: React.PropTypes.string,
  assets: React.PropTypes.object,
}

export default CollectionItemAssets
