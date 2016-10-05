import React from 'react'

const Model3d = (props) => {
  return (
    <div style={{ height: '75vh' }}>
      <iframe width="100%" height="100%" src={props.url} frameBorder="0" allowFullScreen />
    </div>
  )
}

Model3d.propTypes = {
  url: React.PropTypes.string.isRequired,
}

export default Model3d
