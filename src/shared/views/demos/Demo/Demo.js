import React from 'react'
import Dropdown from 'react-toolbox/lib/dropdown'
import { Vibrate, Notifications, VoiceRecognition, Fullscreen } from '../index'

import styles from './Demo.css'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      demoFeatures: [
        { value: 0, label: 'Vibrate', component: <Vibrate /> },
        { value: 1, label: 'Fullscreen', component: <Fullscreen /> },
        { value: 2, label: 'Voice Recognition', component: <VoiceRecognition /> },
        { value: 3, label: 'Notifications', component: <Notifications /> },
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

export default Demo
