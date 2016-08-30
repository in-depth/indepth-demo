import React from 'react'
import { connect } from 'react-redux'

import { ObjectHeader, ObjectStats } from '../index'

const CollectionObject = (props) => {
  console.log(props)
  return (
    <div>
      <ObjectHeader title={props.collectionObject.title} image={props.collectionObject.mainImage} />
      <ObjectStats date={props.collectionObject.date} />
    </div>
  )
}

const mapStateToProps = ({object}) => ({
  collectionObject: object,
})

const CollectionObjectContainer = connect(mapStateToProps)(CollectionObject)

export default CollectionObjectContainer
export { CollectionObject }
