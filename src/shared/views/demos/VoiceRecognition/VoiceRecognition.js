import React from 'react'
import { Button } from 'react-toolbox/lib/button'

import { Icon } from '../../../components/'

import styles from './VoiceRecognition.css'

class VoiceRecognition extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '', recognising: false, icon: 'voice-off' }
  }

  componentDidMount() {
    this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
    this.updateResults()
  }

  updateResults() {
    this.recognition.onresult = (event) => {
      this.setState({ text: `"${event.results[0][0].transcript}"`})
      if (event.results[0][0].transcript === 'go home') window.location.href = '/'
    }
    this.recognition.onend = () => {
      this.setState({ recognising: false, icon: 'voice-off' })
    }
  }

  listen() {
    if (this.state.recognising) {
      this.recognition.stop()
      this.setState({ icon: 'voice-off', recognising: false })
      return
    }
    this.setState({ icon: 'voice', recognising: true, text: '' })
    this.recognition.lang = 'en-US'
    this.recognition.interimResults = true
    this.recognition.maxAlternatives = 5
    this.recognition.start()
  }

  render() {
    return (
      <div>
        <div>Note: this feature is currently unavailable on iPhone</div>
        <div className={styles.voiceButton}>
          <Button onClick={this.listen.bind(this)} raised primary>
            <Icon icon={this.state.icon} /> {this.state.recognising ? 'Stop listening' : 'Start listening'}
          </Button>
        </div>
        <div className={styles.voiceText}>
          <h3>You said:</h3>
          <p>{this.state.text}</p>
          <h3>Commands</h3>
          <li>Go home</li>
        </div>
      </div>
    )
  }
}

export default VoiceRecognition
