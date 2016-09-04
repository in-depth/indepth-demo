import React from 'react'

import { ShowContainer } from './index'

const ShowRoute = (props) => {
  return (
    <div>
      <ShowContainer id={props.params.show} />
    </div>
  )
}

ShowRoute.propTypes = {
  params: React.PropTypes.object,
}

export default ShowRoute
