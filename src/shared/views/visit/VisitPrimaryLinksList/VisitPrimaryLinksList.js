import React from 'react'
import { Link } from 'react-router'

import { VisitPrimaryLink } from '../index'

import styles from './VisitPrimaryLinksList.css'
import Icon from '../../../components/Icon/Icon'

const VisitPrimaryLinksList = (props) => {
  return (
    <div className={styles.visitPrimaryLinks}>
      {props.primaryLinks.map((link, index) => (
        <VisitPrimaryLink
          key={index}
          title={link.title}
          path={link.path}
          index={index}
          inlineEditing={props.inlineEditing}
          icon={link.icon}
          action={props.action}
        />
      ))}
    </div>
  )
}

VisitPrimaryLinksList.propTypes = {
  inlineEditing: React.PropTypes.bool.isRequired,
  primaryLinks: React.PropTypes.array.isRequired,
  action: React.PropTypes.func.isRequired,
}

export default VisitPrimaryLinksList
