import React from 'react'
import DeepZoom from '../../plugins/DeepZoom/osd'

const DeepZoomDemo = () => {
  return (
    <div>
      <DeepZoom
        title={'Paris'}
        url={'https://s3-us-west-2.amazonaws.com/indepthapp/deepzooms/paris/paris.dzi'}
      />
    </div>
  )
}

export default DeepZoomDemo
