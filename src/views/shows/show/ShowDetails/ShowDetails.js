import React from 'react'

const ShowDetails = (props) => {
  return (
    <div>
      <i>{props.date}</i>
      <p>{props.description}</p>
    </div>
  )
}

// ShowDetails.propTypes = {
//   date: React.PropTypes.sting.isRequired,
//   description: React.PropTypes.sting.isRequired,
// }

export default ShowDetails
