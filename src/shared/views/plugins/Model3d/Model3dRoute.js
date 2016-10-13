import React from 'react'
import { connect } from 'react-redux'

import Model3d from './Model3d'

import styles from './model3d.css'

const Model3dRoute = (props) => {
  if (!props.models3d || props.models3d.length === 0) {
    return <div><h2>No deep zoom images found.</h2></div>
  }

  return (
    <div>
      <p className={styles.title}>3d Models for <b>{props.title}</b></p>
      {props.models3d.map((url) =>
        <Model3d key={url} url={url} />
      )}
    </div>
  )
}

Model3dRoute.propTypes = {
  itemId: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  assets: React.PropTypes.object.isRequired,
  models3d: React.PropTypes.array.isRequired,
}

const mapStateToProps = ({ collectionItems }, ownProps) => {
  const item = collectionItems.collectionItems[ownProps.params.id]
  return {
    itemId: item.id,
    title: item.title,
    assets: item.assets,
    models3d: item.assets ? item.assets.models3d : [],
  }
}

const Model3dRouteContainer = connect(mapStateToProps)(Model3dRoute)


export default Model3dRouteContainer
