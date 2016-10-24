import React from 'react'
import Link from 'react-router/lib/Link'

const Demo = ({ children }) => {
  <ul role={'nav'}>
    <li><Link to={'demo/vibrate'}>Vibration-API</Link></li>
    <li><Link to={'demo/voice'}>Voice-Recognition</Link></li>
    {children}
  </ul>
}

export default Demo
