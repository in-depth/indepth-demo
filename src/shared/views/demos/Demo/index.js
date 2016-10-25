import React from 'react'
import Link from 'react-router/lib/Link'
import IndexLink from 'react-router/lib/IndexLink'

const Demo = ({ children }) => {
  return (
    <nav>
      <li><IndexLink to={'demo'}>Vibration-API</IndexLink></li>
      <li><Link to={'demo/voice'}>Voice-Recognition</Link></li>
      <li><Link to={'demo/notifications'}>Notificaitons</Link></li>
      {children}
    </nav>
  )
}

Demo.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Demo
