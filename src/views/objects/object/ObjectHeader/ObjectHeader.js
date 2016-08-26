import React from 'react'

const ObjectHeader = (props) => {
  return (
    <div>
      <img alt={props.title} src={props.img} />
      <div><b>{props.title}</b></div>
    </div>
  )
}

ObjectHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  img: React.PropTypes.string.isRequired,
}

export default ObjectHeader
