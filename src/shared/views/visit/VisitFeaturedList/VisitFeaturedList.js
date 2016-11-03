import React from 'react'

import { VisitFeaturedLink } from '../index'

import styles from './visitFeaturedList.css'

const VisitFeaturedList = (props) => {
  return (
    <div className={styles.main}>
      <aside className={styles.featuredJumbotron}>
        <h1>{'FEATURED'}</h1>
      </aside>
      <section className={styles.featuredContainer}>
        {props.featuredLinks.map((featuredLink, i) => (
          <VisitFeaturedLink
            key={i}
            inlineEditing={props.inlineEditing}
            featuredLink={featuredLink}
            index={i}
            action={props.action}
          />
        ))}
      </section>
    </div>
  )
}


VisitFeaturedList.propTypes = {
  featuredLinks: React.PropTypes.array.isRequired,
  inlineEditing: React.PropTypes.bool.isRequired,
  action: React.PropTypes.func.isRequired,
}

export default VisitFeaturedList
