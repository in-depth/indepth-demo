import React from 'react'
import { Link } from 'react-router'
import { Card, CardTitle, CardMedia } from 'react-toolbox/lib/card'

import styles from './PlanLink.css'

const PlanLink = (props) => {
  return (
    <Link to={props.path} className={styles.main}>
      <div
        className={styles.planImage}
        style={{
          backgroundImage: `url(${props.backgroundUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className={styles.text}>
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </Link>
  )
}

PlanLink.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
}

export default PlanLink
