import React from 'react'

const CollectionItemStats = (props) => {
  return (
    <div>
      <span>Date:</span> <span>{props.date}</span><br />
    </div>
  )
}

CollectionItemStats.propTypes = {
  date: React.PropTypes.string.isRequired,
}

export default CollectionItemStats
