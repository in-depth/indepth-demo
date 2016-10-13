import React from 'react'
import { Card, CardTitle, CardMedia } from 'react-toolbox/lib/card'

import styles from './planCards.css'

const PlansCard = ({ image, text, title }) => {
  return (
    <Card className={styles.card}>
      <CardMedia aspectRatio="wide" image={image} />
      <CardTitle className={styles.planTitle} title={title} subtitle={text} />
    </Card>
  )
}

PlansCard.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
}

export default PlansCard
