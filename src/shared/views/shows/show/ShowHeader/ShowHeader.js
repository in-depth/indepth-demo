import React from 'react'

const ShowHeader = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

ShowHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
}

export default ShowHeader
