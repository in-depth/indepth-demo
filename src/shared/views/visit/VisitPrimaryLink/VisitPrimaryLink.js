import React from 'react'
import { Link } from 'react-router'
import Editor from 'react-medium-editor'

import styles from './VisitPrimaryLink.css'
import Icon from '../../../components/Icon/Icon'

class VisitPrimaryLink extends React.Component {
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
          <div className={styles.link}>
            <div key={this.props.title} className={styles.visitPrimaryLink}>
              <Icon icon={this.props.icon} />
              <span className={styles.linkText} style={{ textDecoration: 'underline' }}>
                <Editor
                  text={this.props.title}
                  onChange={this.handleChange.bind(this)}
                  onBlur={this.pushToRedux.bind(this)}
                  options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
                />
              </span>
            </div>
          </div>
          :
          <Link className={styles.link} to={this.props.path}>
            <div key={this.props.title} className={styles.visitPrimaryLink}>
              <Icon icon={this.props.icon} />
              <span className={styles.linkText}>{this.props.title}</span>
            </div>
          </Link>
        }
      </div>
    )
  }
}

VisitPrimaryLink.propTypes = {
  title: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
  inlineEditing: React.PropTypes.bool.isRequired,
  icon: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
}

export default VisitPrimaryLink
