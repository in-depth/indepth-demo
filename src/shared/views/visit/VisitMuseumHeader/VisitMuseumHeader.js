import React from 'react'
import { withRouter } from 'react-router'
import Editor from 'react-medium-editor'

import styles from './VisitMuseumHeader.css'

// const museumSettings = {
//   demo: {
//     name: 'DEMO',
//     tagline: 'The official demo museum',
//     image: '/static/images/museums/tepapa.jpg',
//   },
//   tepapa: {
//     name: 'TE PAPA',
//     tagline: 'Museum of New Zealand Te Papa Tongawera',
//     image: '/static/images/museums/tepapa.jpg',
//   },
//   exploratorium: {
//     name: 'EXPLORATORIUM',
//     tagline: 'the intersection of science, art, and human perception',
//     image: '/static/images/museums/exploratorium.jpg',
//   },
//   calacademy: {
//     name: 'California Academy of Science',
//     tagline: 'There\'s never been a better time or place to explore nature and the future',
//     image: '/static/images/museums/cali-science.jpg',
//   },
//   asianart: {
//     name: 'ASIAN ART',
//     tagline: 'Unique achievements in Asian art and culture',
//     image: '/static/images/museums/asianart.jpg',
//   },
// }

// const getMuseumInfo = (baseUrl) => {
//   // Get the baseurl / hostname to display correct museum
//   let subdomain = ''
//   if (typeof location !== 'undefined') {
//     subdomain = location.hostname.split('.')[0].toLowerCase()
//     console.log(subdomain)
//   } else if (baseUrl) {
//     subdomain = baseUrl.split('.')[0].toLowerCase()
//   }
//
//   switch (subdomain) {
//     case 'tepapa':
//       return museumSettings.tepapa
//     case 'exploratorium':
//       return museumSettings.exploratorium
//     default:
//       return museumSettings.demo
//   }
// }
//
// const baseUrl = props.location.baseUrl ? props.location.baseUrl : ''
// const museumInfo = getMuseumInfo(baseUrl)


// const getMuseumInfo = (baseUrl) => {
//   // Get the baseurl / hostname to display correct museum
//   let subdomain = ''
//   if (typeof location !== 'undefined') {
//     subdomain = location.hostname.split('.')[0].toLowerCase()
//   } else if (baseUrl) {
//     subdomain = baseUrl.split('.')[0].toLowerCase()

class VisitMuseumHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = { header: '', subHeader: '' }
  }

  componentDidMount() {
    this.setState({ header: this.props.header, subHeader: this.props.subHeader })
  }

  handleHeaderChange() {
    this.setState({ header: event.target.textContent })
  }

  handleSubHeaderChange() {
    this.setState({ subHeader: event.target.textContent })
  }

  pushToRedux() {
    this.props.action(this.state.header, this.state.subHeader)
  }
  render() {
    return (
      <div className={styles.museumHeader} style={{ backgroundImage: `url("${this.props.image}")` }} >
        <div className={styles.overlay}>
          {this.props.inlineEditing ?
            <div>
              <h1 className={styles.museumName} style={{ textDecoration: 'underline' }}>
                <Editor
                  text={this.props.header}
                  onChange={this.handleHeaderChange.bind(this)}
                  onBlur={this.pushToRedux.bind(this)}
                  options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
                />
              </h1>
              <div className={styles.museumTagline} style={{ textDecoration: 'underline' }}>
                <Editor
                  text={this.props.subHeader}
                  onChange={this.handleSubHeaderChange.bind(this)}
                  onBlur={this.pushToRedux.bind(this)}
                  options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
                />
                <div className={styles.arrowContainer}>
                  <svg
                    fill={'#ffffff'}
                    viewBox={'0 0 24 24'}
                    xmlns={'http://www.w3.org/2000/svg'}
                    className={styles.downarrow}
                  >
                    <path d={'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'} />
                    <path d={'M0 0h24v24H0z'} fill={'none'} />
                  </svg>
                </div>
              </div>
            </div>
            :
            <div>
              <h1 className={styles.museumName}>
                {this.props.header}
              </h1>
              <div className={styles.museumTagline}>
                {this.props.subHeader}
              </div>
              <div className={styles.arrowContainer}>
                <svg
                  fill={'#ffffff'}
                  viewBox={'0 0 24 24'}
                  xmlns={'http://www.w3.org/2000/svg'}
                  className={styles.downarrow}
                >
                  <path d={'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'} />
                  <path d={'M0 0h24v24H0z'} fill={'none'} />
                </svg>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

VisitMuseumHeader.propTypes = {
  location: React.PropTypes.object,
  action: React.PropTypes.func.isRequired,
  header: React.PropTypes.string.isRequired,
  subHeader: React.PropTypes.string.isRequired,
}

export default withRouter(VisitMuseumHeader)

// const VisitMuseumHeader = (props) => {
//   const baseUrl = props.location.baseUrl ? props.location.baseUrl : ''
//   const museumInfo = getMuseumInfo(baseUrl)
//   return (
//     <header
//       className={styles.museumHeader}
//       style={{ backgroundImage: `url("${museumInfo.image}")` }}
//       onDoubleClick={props.action}
//     >
//       <div className={styles.overlay}>
//         <h1 className={styles.museumName}>{museumInfo.name}</h1>
//         <p className={styles.museumTagline}>{museumInfo.tagline}</p>
        // <div className={styles.arrowContainer}>
        //   <svg
        //     fill={'#ffffff'}
        //     viewBox={'0 0 24 24'}
        //     xmlns={'http://www.w3.org/2000/svg'}
        //     className={styles.downarrow}
        //   >
        //     <path d={'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'} />
        //     <path d={'M0 0h24v24H0z'} fill={'none'} />
        //   </svg>
        // </div>
//       </div>
//     </header>
//   )
