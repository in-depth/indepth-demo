import React from 'react'
import { Link } from 'react-router'

const VisitLinks = (props) => {
  return (
    <div>
      {props.topLinks.map((topLink) => (
        <div key={topLink.title}>
          <Link key={topLink.title} to={topLink.path}>{topLink.title}</Link>
        </div>
      ))}
    </div>
  )
}

VisitLinks.propTypes = {
  topLinks: React.PropTypes.array.isRequired,
}

export default VisitLinks
