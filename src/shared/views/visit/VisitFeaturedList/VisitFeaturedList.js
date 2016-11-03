import React from 'react'

import { VisitFeaturedLink } from '../index'

import styles from './visitFeaturedList.css'

const VisitFeaturedList = (props) => {
  return (
    <div className={styles.main}>
      {props.featuredLinks.map((featuredLink, index) => (
        <div
          key={featuredLink.title}
          className={styles.featuredWrapper}
        >
          <VisitFeaturedLink
            key={index}
            inlineEditing={props.inlineEditing}
            featuredLink={featuredLink}
            index={index}
            action={props.action}
            style={{
              backgroundImage: `url(${featuredLink.backgroundUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
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
