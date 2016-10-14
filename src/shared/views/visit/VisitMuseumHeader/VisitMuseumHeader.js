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
    image: '/static/image/museums/exploratorium.jpg',
  },
}

const getMuseumInfo = () => {
  let subdomain = ''
  // console.log('is location undefined', typeof location !== 'undefined')
  // if (typeof window !== 'undefined') {
  //   console.log('not undefined')
  //   subdomain = window.location.hostname.split('.')[0].toLowerCase()
  // }
  if (typeof location !== 'undefined') {
    console.log('not undefined')
    subdomain = location.hostname.split('.')[0].toLowerCase()
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

const VisitMuseumHeader = () => {
  // console.log(props)
  // console.log(props.location)
  // console.log(props.router)
  // console.log(props.router.location)
  // console.log(props.router.params)
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

VisitMuseumHeader.contextTypes = {
  router: React.PropTypes.func.isRequired,
}

export default withRouter(VisitMuseumHeader)
