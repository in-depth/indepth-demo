import React from 'react'

const ShowDetails = (props) => {
  return (
    <div style={{ padding: '0 15px' }}>
      <i>{props.date}</i>
      <p>{props.time}</p>
      <p>{props.location}</p>
      <p>{props.description}</p>
    </div>
  )
}

ShowDetails.propTypes = {
  date: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  time: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
}

export default ShowDetails
