import React from 'react'

import { VisitMuseumHeader, VisitPrimaryLinksList, VisitFeaturedList } from '../index'

import styles from './Visit.css'

const Visit = (props) => {
  return (
    <div>
      <VisitMuseumHeader
        inlineEditing={props.inlineEditing}
        action={props.actions.toggleInlineEditing}
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
}

export default Visit
