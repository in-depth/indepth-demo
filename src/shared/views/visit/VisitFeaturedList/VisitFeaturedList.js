import React from 'react'
import { Link } from 'react-router'

import styles from './visitFeaturedList.css'

const VisitFeaturedList = (props) => {
  return (
    <div>
      <h1>Featured</h1>
      {props.featuredLinks.map((featuredLink) => (
        <div key={featuredLink.title} className={styles.featuredLink} style={{backgroundImage: "url(" + featuredLink.backgroundUrl + ")"}}>
          <Link to={featuredLink.path}>
            <div className={styles.overlay}>
              <h2>
                {featuredLink.title}
              </h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default VisitFeaturedList
