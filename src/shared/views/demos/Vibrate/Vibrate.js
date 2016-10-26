import React from 'react'
import { Button } from 'react-toolbox/lib/button'
import styles from './Vibrate.css'
import { Icon } from '../../../components'

const handleVibrate = e => {
  e.preventDefault()
  window.navigator.vibrate([100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30, 100])
}

const Vibrate = () => {
  return (
    <div className={styles.main}>
      <Button onClick={handleVibrate} raised primary>
        <Icon icon="vibrate" />
        Test vibrate
      </Button>
    </div>
  )
}

export default Vibrate
