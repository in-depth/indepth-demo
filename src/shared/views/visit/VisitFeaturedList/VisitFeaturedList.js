import React from 'react'

import { VisitFeaturedLink } from '../index'

import styles from './visitFeaturedList.css'

const VisitFeaturedList = (props) => {
  return (
    <div>
      {props.featuredLinks.map((featuredLink, index) => (
        <div
          key={featuredLink.title}
          className={styles.featuredLink}
          style={{ backgroundImage: `url(${featuredLink.backgroundUrl})` }}
        >
          <VisitFeaturedLink
            key={index}
            inlineEditing={props.inlineEditing}
            featuredLink={featuredLink}
            index={index}
            action={props.action}
          />
        </div>
    ))}
    </div>
  )
}


VisitFeaturedList.propTypes = {
  featuredLinks: React.PropTypes.array.isRequired,
  inlineEditing: React.PropTypes.bool.isRequired,
  action: React.PropTypes.func.isRequired,
}

export default VisitFeaturedList
