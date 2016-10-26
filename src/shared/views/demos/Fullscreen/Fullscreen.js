import React from 'react'
import { Button } from 'react-toolbox/lib/button'

import { Icon } from '../../../components/'

import styles from './Fullscreen.css'

class Fullscreen extends React.Component {
  componentDidMount() {
    this.screenfull = require('screenfull')
  }

  toggleFullscreen() {
    this.screenfull.toggle()
  }

  render() {
    return (
      <div className={styles.fullscreenButton}>
        <Button onClick={this.toggleFullscreen.bind(this)} raised primary>
          <Icon icon="fullscreen" /> Fullscreen mode
        </Button>
      </div>
    )
  }
}

export default Fullscreen
