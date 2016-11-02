import React from 'react'
import { Button } from 'react-toolbox/lib/button'
import styles from './AudioPlayer.css'
import { Icon } from '../../../components'

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
    }
  }

  componentDidMount() {
    this.onMount(() => {
      const { Howl } = require('howler')

      this.player = new Howl({
        src: ['/static/media/comfort.mp3'],
        onplay: () => { this.setState({ isPlaying: true }) },
        onpause: () => { this.setState({ isPlaying: false }) },
      })
    })
  }

  onMount(cb) { if (typeof window !== undefined) cb() }

  toggleAudio(e) {
    e.preventDefault()
    return this.player.playing() ? this.player.pause() : this.player.play()
  }

  render() {
    const { isPlaying } = this.state
    return (
      <div className={styles.main}>
        <div className={styles.player}>
          <Button onClick={this.toggleAudio.bind(this)} raised primary>
            <Icon
              className={styles.playbutton}
              icon={isPlaying ? 'pauseArrow' : 'playArrow'}
            />
            {isPlaying ? 'TEST PAUSE' : 'TEST PLAY'}
          </Button>
        </div>
      </div>
    )
  }
}

export default AudioPlayer
