import React from 'react'

const CollectionItemStats = (props) => {
  return (
    <div>
      <span>Type:</span> <span>{props.type}</span><br />
      <span>Sub Type:</span> <span>{props.subType}</span><br />
      <span>Classifications:</span> <span>{props.classifications.map(v => `${v}, `)}</span><br />
      <span>Date:</span> <span>{props.date}</span><br />
    </div>
  )
}

CollectionItemStats.propTypes = {
  date: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  subType: React.PropTypes.string.isRequired,
  classifications: React.PropTypes.array.isRequired,
}

export default CollectionItemStats
