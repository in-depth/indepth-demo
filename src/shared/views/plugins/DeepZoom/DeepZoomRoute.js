import React from 'react'
import { connect } from 'react-redux'

import DeepZoom from './DeepZoom'

const DeepZoomRoute = (props) => {
  if (!props.deepzoomAssets || props.deepzoomAssets.length === 0) {
    return <div><h2>No deep zoom images found.</h2></div>
  }

  return (
    <div>
      <p>Deep zoom images for <b>{props.title}</b></p>
      {props.deepzoomAssets.map((url) =>
        <DeepZoom key={url} url={url} />
      )}
    </div>
  )
}

DeepZoomRoute.propTypes = {
  itemId: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  assets: React.PropTypes.object.isRequired,
  deepzoomAssets: React.PropTypes.array.isRequired,
}

const mapStateToProps = ({ collectionItems }, ownProps) => {
  const item = collectionItems.collectionItems[ownProps.params.id]
  return {
    itemId: item.id,
    title: item.title,
    assets: item.assets,
    deepzoomAssets: item.assets ? item.assets.deepzoom : [],
  }
}

const DeepZoomRouteContainer = connect(mapStateToProps)(DeepZoomRoute)


export default DeepZoomRouteContainer
