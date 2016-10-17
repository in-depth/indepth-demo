import React from 'react'
import { withRouter } from 'react-router'

import styles from './VisitMuseumHeader.css'

const museumSettings = {
  demo: {
    name: 'DEMO',
    tagline: 'The official demo museum',
    image: '/static/images/museums/tepapa.jpg',
  },
  tepapa: {
    name: 'TE PAPA',
    tagline: 'Museum of New Zealand Te Papa Tongawera',
    image: '/static/images/museums/tepapa.jpg',
  },
  exploratorium: {
    name: 'EXPLORATORIUM',
    tagline: 'the intersection of science, art, and human perception',
    image: '/static/images/museums/exploratorium.jpg',
  },
  calacademy: {
    name: 'California Academy of Science',
    tagline: 'There\'s never been a better time or place to explore nature and the future',
    image: '/static/images/museums/cali-science.jpg',
  },
  asianart: {
    name: 'ASIAN ART',
    tagline: 'Unique achievements in Asian art and culture',
    image: '/static/images/museums/asianart.jpg',
  },
}

const getMuseumInfo = (baseUrl) => {
  // Get the baseurl / hostname to display correct museum
  let subdomain = ''
  if (typeof location !== 'undefined') {
    subdomain = location.hostname.split('.')[0].toLowerCase()
    console.log(subdomain)
  } else if (baseUrl) {
    subdomain = baseUrl.split('.')[0].toLowerCase()
  }

  switch (subdomain) {
    case 'tepapa':
      return museumSettings.tepapa
    case 'exploratorium':
      return museumSettings.exploratorium
    default:
      return museumSettings.demo
  }
}

const VisitMuseumHeader = (props) => {
  const baseUrl = props.location.baseUrl ? props.location.baseUrl : ''
  const museumInfo = getMuseumInfo(baseUrl)
  return (
    <div className={styles.museumHeader} style={{ backgroundImage: `url("${museumInfo.image}")` }}>
      <div className={styles.overlay}>
        <h1 className={styles.museumName}>{museumInfo.name}</h1>
        <p className={styles.museumTagline}>{museumInfo.tagline}</p>
      </div>
    </div>
  )
}

VisitMuseumHeader.propTypes = {
  location: React.PropTypes.object,
}

export default withRouter(VisitMuseumHeader)
