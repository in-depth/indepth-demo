import React from 'react'

import { Icon } from '../../../components'

import styles from './TopMenuExitFullscreen.css'

class TopMenuExitFullscreen extends React.Component {
  componentDidMount() {
    this.screenfull = require('screenfull')
  }

  toggleFullscreen() {
    this.screenfull.toggle()
    this.props.handleToggleFullscreen()
  }

  render() {
    return (
      <div className={styles.fullscreen} onClick={this.toggleFullscreen.bind(this)}>
        {this.props.fullscreen ?
          <Icon icon="fullscreen-exit" />
          :
          null
        }
      </div>
    )
  }
}

export default TopMenuExitFullscreen
