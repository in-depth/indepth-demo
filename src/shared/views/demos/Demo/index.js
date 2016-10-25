import React from 'react'
import Link from 'react-router/lib/Link'
import Dropdown from 'react-toolbox/lib/dropdown'
import { Vibrate } from '../index'

const demoFeatures = [
  { value: 'vibrate', label: 'Vibrate', component: <Vibrate /> },
  { value: 'Fullscreen', label: 'Fullscreen', component: <Vibrate /> },
  { value: 'TH-th', label: 'Voice Recognition' },
  { value: 'EN-en', label: 'Notifications' },
]

// const demoFeatures = {
//   vibrate: <Vibrate />,
// }

const feature = { component: Vibrate }

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 'vibrate', index: 0 }
  }

  handleChange = (value) => {
    this.setState({ value, index: 0 })
  }

  render() {
    const { value, index } = this.state
    return (
      <div>
        <Dropdown
          auto
          onChange={this.handleChange}
          source={demoFeatures}
          value={value}
        />
        {React.createElement(feature.component)}
      </div>
    )
  }
}


// <ul role={'nav'}>
//   <li><Link to={'demo/vibrate'}>Vibration-API</Link></li>
//   <li><Link to={'demo/voice'}>Voice-Recognition</Link></li>
//   {children}
// </ul>
// const Demo = ({ children }) => {
//   <ul role={'nav'}>
//     <li><Link to={'demo/vibrate'}>Vibration-API</Link></li>
//     <li><Link to={'demo/voice'}>Voice-Recognition</Link></li>
//     {children}
//   </ul>
// }

export default Demo
