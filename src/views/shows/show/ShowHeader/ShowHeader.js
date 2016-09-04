import React from 'react'

const ShowHeader = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

// ShowHeader.propTypes = {
//   title: React.PropTypes.sting.isRequired,
// }

export default ShowHeader
