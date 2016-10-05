import React from 'react'

const Model3d = (props) => {
  return (
    <div>
      <iframe width="640" height="480" src={props.url} frameBorder="0" allowFullScreen />
    </div>
  )
}

Model3d.propTypes = {
  url: React.PropTypes.string.isRequired,
}

export default Model3d
