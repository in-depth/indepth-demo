import React from 'react'
// import OpenSeaDragon from 'openseadragon'

import styles from './DeepZoom.css'

// const osdId = 'osd'

// class DeepZoom extends Component {
//   static propTypes = {
//     url: PropTypes.string.isRequired,
//   }
//
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }
//
//   componentDidMount() {
//     this.onMount(imgUrl => {
//       this.setState({
//         viewer: OpenSeaDragon({
//           element: this[osdId],
//           prefixUrl: '/static/images/dzi-controls/',
//           tileSources: imgUrl,
//           maxZoomPixelRatio: Infinity,
//         }),
//       })
//     })
//   }
//
//   onMount(cb) { cb(this.props.url) }
//
//   render() {
//     return (
//       <div
//         ref={elm => { this[osdId] = elm }}
//         className={styles.holder}
//       />
//     )
//   }
// }

const DeepZoom = props => {
  const mountOpenSeaDragon = (elm, url) => {
    if (typeof window !== undefined) {
      const OpenSeaDragon = require('openseadragon')

      OpenSeaDragon({
        element: elm,
        prefixUrl: '/static/images/dzi-controls/',
        tileSources: url,
        maxZoomPixelRatio: Infinity,
      })
    }
  }
  return (
    <div
      className={styles.holder}
      ref={elm => mountOpenSeaDragon(elm, props.url)}
    />
  )
}

DeepZoom.propTypes = {
  url: React.PropTypes.string.isRequired,
}

export default DeepZoom
