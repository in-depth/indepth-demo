import React from 'react'
import { Link } from 'react-router'

import styles from './visitLinks.css'
import Icon from '../../../components/Icon/Icon'

const VisitLinks = (props) => {
  return (
    <div className={styles.visitPrimaryLinks}>
      {props.topLinks.map((topLink) => (
        <Link key={topLink.title} to={topLink.path}>
          <div key={topLink.title} className={styles.visitPrimaryLink}>
            <Icon icon={topLink.icon} />
            <span className={styles.linkText}>{topLink.title}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

VisitLinks.propTypes = {
  topLinks: React.PropTypes.array.isRequired,
}

export default VisitLinks
