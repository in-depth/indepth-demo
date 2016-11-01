import React from 'react'
import { Link } from 'react-router'
import Editor from 'react-medium-editor'

import styles from './VisitFeaturedLink.css'

class VisitFeaturedLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: '', index: this.props.index }
  }

  handleChange() {
    this.setState({ title: event.target.textContent })
  }

  pushToRedux() {
    if (this.state.title !== '') this.props.action(this.state.title, this.state.index)
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.inlineEditing ?
          <div className={styles.featuredPath}>
            <div className={styles.overlay}>
              <h2 style={{ textDecoration: 'underline' }}>
                <Editor
                  text={this.props.featuredLink.title}
                  onChange={this.handleChange.bind(this)}
                  onBlur={this.pushToRedux.bind(this)}
                  options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
                />
              </h2>
            </div>
          </div>
          :
          <Link className={styles.featuredPath} to={this.props.featuredLink.path}>
            <div className={styles.overlay}>
              <h2>
                {this.props.featuredLink.title}
              </h2>
            </div>
          </Link>
        }
      </div>
    )
  }
}

VisitFeaturedLink.propTypes = {
  featuredLink: React.PropTypes.object.isRequired,
  inlineEditing: React.PropTypes.bool.isRequired,
  index: React.PropTypes.number.isRequired,
  action: React.PropTypes.func.isRequired,
}

export default VisitFeaturedLink
