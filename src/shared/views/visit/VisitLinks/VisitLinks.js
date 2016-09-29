import React from 'react'
import { Link } from 'react-router'

import styles from './visitLinks.css'

const VisitLinks = (props) => {
  return (
    <div>
      {props.topLinks.map((topLink) => (
        <div key={topLink.title}>
          <Link key={topLink.title} to={topLink.path}>{topLink.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default VisitLinks
