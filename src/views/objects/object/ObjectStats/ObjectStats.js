import React from 'react'

const ObjectStats = (props) => {
  return (
    <div>
      <span>Date:</span> <span>{props.date}</span><br />
    </div>
  )
}

ObjectStats.propTypes = {
  date: React.PropTypes.string.isRequired,
}

export default ObjectStats
