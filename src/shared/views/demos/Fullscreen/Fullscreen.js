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
    this.props.action()
  }

  render() {
    return (
      <div>
        <div>Note: this feature is currently unavailable on iPhone</div>
        <div className={styles.fullscreenButton}>
          <Button onClick={this.toggleFullscreen.bind(this)} raised primary>
            <Icon icon="fullscreen" /> Fullscreen mode
          </Button>
        </div>
      </div>
    )
  }
}

export default Fullscreen
