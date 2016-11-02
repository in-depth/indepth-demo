import React from 'react'
import { Button } from 'react-toolbox/lib/button'
import styles from './Vibrate.css'
import { Icon } from '../../../components'

const handleVibrate = e => {
  e.preventDefault()
  window.navigator.vibrate([100, 10, 200, 10, 400, 10, 800, 10, 1600, 10, 3200, 10, 1600, 10, 800, 10, 400, 10, 200, 10, 100])
}

const Vibrate = () => {
  return (
    <div>
      <div>Note: this feature is currently unavailable on iPhone</div>
      <div className={styles.main}>
        <Button className={styles.vibrateButton} onClick={handleVibrate} raised primary>
          <Icon icon="vibrate" />
          Test vibrate
        </Button>
      </div>
    </div>
  )
}

export default Vibrate
