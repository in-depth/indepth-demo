import React from 'react'

const DeepZoom = (props) => {
  return (
    <div>
      <iframe width="640" height="360" src={props.url} frameBorder="0" allowFullScreen />
    </div>
  )
}

DeepZoom.propTypes = {
  url: React.PropTypes.string.isRequired,
}

export default DeepZoom
