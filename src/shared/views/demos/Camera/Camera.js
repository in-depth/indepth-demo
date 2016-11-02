import React from 'react'
import { Button } from 'react-toolbox/lib/button'
import Webcam from 'react-webcam'

import { Icon } from '../../../components/'

import styles from './Camera.css'


class Camera extends React.Component {
  constructor() {
    super()
    this.state = { screenshot: '', displayPhoto: false }
  }

  screenshot() {
    const screenshot = this.webcam.getScreenshot()
    this.setState({ screenshot, displayPhoto: true })
  }

  toggleDisplayPhoto() {
    this.setState({ displayPhoto: false })
  }

  render() {
    return (
      <div>
        <div>Note: this feature is currently unavailable on iPhone<br /><br /></div>
        <div className={styles.wrapper}>
          <div className={styles.camera}>
            { this.state.displayPhoto ?
              <img className={styles.camera} alt="my-camera" src={this.state.screenshot} />
              :
              <Webcam className={styles.camera} ref={(c) => { this.webcam = c }} audio={false} />
            }
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          {this.state.displayPhoto ?
            <Button primary raised onClick={this.toggleDisplayPhoto.bind(this)} >
              <Icon icon="refresh" /> Again?
            </Button>
            :
            <Button primary raised onClick={this.screenshot.bind(this)}>
              <Icon icon="camera" /> Take photo
            </Button>
          }
        </div>
      </div>
    )
  }
}

export default Camera
