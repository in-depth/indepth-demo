import React from 'react'
import { Button } from 'react-toolbox/lib/button'
import Push from 'push.js'

import { Icon } from '../../../components/'

import styles from './Notifications.css'

const notification = () => {
  Push.create('Howdy from Indepth', {
    body: 'This is a mobile web notification',
    icon: {
      x16: 'static/images/waving.png',
      x32: 'static/images/waving.png',
    },
    timeout: 5000,
    vibrate: [2000],
    onClick: () => { window.location.href = '/collection' },
    serviceWorker: '/static/sw.js',
  })
}

const Notifications = () => {
  return (
    <div className={styles.notificationButton}>
      <Button onClick={notification} raised primary>
        <Icon icon="notification" /> Test notification
      </Button>
    </div>
  )
}

export default Notifications
