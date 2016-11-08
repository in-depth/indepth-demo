import React from 'react'
import Dropdown from 'react-toolbox/lib/dropdown'
import { Vibrate, Notifications, VoiceRecognition, Fullscreen, AudioPlayer, Camera, DeepZoomDemo, ThreeD } from '../index'

import styles from './Demo.css'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      demoFeatures: [
        { value: 0, label: 'Vibrate', component: <Vibrate /> },
        { value: 1, label: 'Fullscreen', component: <Fullscreen action={this.props.actions.toggleFullscreen} /> },
        { value: 2, label: 'Voice Recognition', component: <VoiceRecognition /> },
        { value: 3, label: 'Notifications', component: <Notifications /> },
        { value: 4, label: 'Camera', component: <Camera /> },
        { value: 5, label: 'Audio Player', component: <AudioPlayer /> },
        { value: 6, label: '3d Models', component: <ThreeD /> },
        { value: 7, label: 'Deepzoom Images', component: <DeepZoomDemo /> },
      ],
    }
  }

  handleChange(value) {
    this.setState({ selected: value })
  }

  render() {
    const { selected, demoFeatures } = this.state
    return (
      <div className={styles.demoPage}>
        <span className={styles.select}>Select demo feature:</span>
        <Dropdown
          auto
          onChange={this.handleChange.bind(this)}
          source={demoFeatures}
          value={selected}
        />
        {demoFeatures[selected].component}
      </div>
    )
  }
}

React.propTypes = {
  actions: React.PropTypes.func.isRequired,
}

export default Demo
