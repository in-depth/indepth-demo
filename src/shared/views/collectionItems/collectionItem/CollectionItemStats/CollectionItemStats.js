import React from 'react'

const CollectionItemStats = (props) => {
  return (
    <div>
      <b>Type:</b> <span>{props.type}</span><br />
      <b>Sub Type:</b> <span>{props.subType}</span><br />
      <b>Classifications:</b> <span>{props.classifications.map(v => `${v}, `)}</span><br />
      <b>Date:</b> <span>{props.date}</span><br />
      <b>Short Description:</b><br />
      <span>{props.shortDesc}</span>
    </div>
  )
}

CollectionItemStats.propTypes = {
  date: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  subType: React.PropTypes.string.isRequired,
  classifications: React.PropTypes.array.isRequired,
  shortDesc: React.PropTypes.string,
}

export default CollectionItemStats
