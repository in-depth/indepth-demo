import React from 'react'

const DeepZoom = (props) => {
  return (
    <div style={{ height: '75vh' }}>
      <iframe width="100%" height="100%" src={props.url} frameBorder="0" allowFullScreen />
    </div>
  )
}

DeepZoom.propTypes = {
  url: React.PropTypes.string.isRequired,
}

export default DeepZoom
