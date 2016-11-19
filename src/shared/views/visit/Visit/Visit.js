import React from 'react'

import { VisitMuseumHeader, VisitFeaturedList, VisitPrimaryLinksList } from '../index'

import styles from './Visit.css'

const Visit = (props) => {
  return (
    <div className={styles.main}>
      <VisitMuseumHeader
        inlineEditing={props.inlineEditing}
        header={props.header}
        subHeader={props.subHeader}
        image={props.image}
        action={props.actions.updateHeader}
      />
      <VisitPrimaryLinksList
        primaryLinks={props.primaryLinks}
        inlineEditing={props.inlineEditing}
        action={props.actions.updatePrimaryLinks}
      />
      <VisitFeaturedList
        inlineEditing={props.inlineEditing}
        featuredLinks={props.featuredLinks}
        action={props.actions.updateFeaturedLinks}
      />
    </div>
  )
}

Visit.propTypes = {
  primaryLinks: React.PropTypes.array.isRequired,
  inlineEditing: React.PropTypes.bool.isRequired,
  featuredLinks: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired,
  header: React.PropTypes.string.isRequired,
  subHeader: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
}

export default Visit
