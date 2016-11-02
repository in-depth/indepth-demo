import React from 'react'
import { Button } from 'react-toolbox/lib/button'
import Push from 'push.js'

import { Icon } from '../../../components/'

import styles from './Notifications.css'

class Notifications extends React.Component {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/static/sw.js', { scope: '/demo' })
      .then(function() {
        return navigator.serviceWorker.ready
      })
      .then(function(reg) {
        reg.pushManager.subscribe({ userVisibleOnly: true })
        .then(function(sub) {
        })
      })
      .catch(function(error) {
      })
    }
  }

  notification() {
    Push.create('Howdy from Indepth', {
      body: 'This is a mobile web notification',
      icon: {
        x16: 'static/images/waving.png',
        x32: 'static/images/waving.png',
      },
      timeout: 5000,
      vibrate: [2000, 1000],
      onClick: () => { window.location.href = '/collection' },
      serviceWorker: '/static/sw.js',
    })
  }

  render() {
    return (
      <div>
        <p>Note: this feature is currently unavailable on iPhone</p>
        <div className={styles.notificationButton}>
          <Button onClick={this.notification.bind(this)} raised primary>
            <Icon icon="notification" /> Test notification
          </Button>
        </div>
      </div>
      )
  }
}

export default Notifications
