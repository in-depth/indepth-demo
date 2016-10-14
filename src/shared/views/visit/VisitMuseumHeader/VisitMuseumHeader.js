import React from 'react'

import styles from './VisitMuseumHeader.css'

const museumSettings = {
  tepapa: {
    name: 'TE PAPA',
    tagline: 'Museum of New Zealand Te Papa Tongawera',
    image: '/static/images/museums/tepapa.jpg',
  },
  exploratorium: {
    name: 'EXPLORATORIUM',
    tagline: 'the intersection of science, art, and human perception',
    image: '/static/image/museums/exploratorium.jpg',
  },
}

const getMuseumInfo = () => {
  const subdomain = window.location.hostname.split('.')[0].toLowerCase()

  switch (subdomain) {
    case 'tepapa':
      return museumSettings.tepapa
    case 'exploratorium':
      return museumSettings.exploratorium
    default:
      return museumSettings.tepapa
  }
}



const VisitMuseumHeader = () => {
  const museumInfo = getMuseumInfo()
  return (
    <div className={styles.museumHeader} style={{ backgroundImage: `url("${museumInfo.image}")` }}>
      <div className={styles.overlay}>
        <h1 className={styles.museumName}>{museumInfo.name}</h1>
        <p className={styles.museumTagline}>{museumInfo.tagline}</p>
      </div>
    </div>
  )
}

export default VisitMuseumHeader
