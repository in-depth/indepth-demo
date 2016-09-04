import React from 'react'

import { ShowContainer } from './index'

const ShowRoute = (props) => {
  return (
    <div>
      <ShowContainer id={props.params.id} />
    </div>
  )
}

ShowRoute.propTypes = {
  params: React.PropTypes.object,
}

export default ShowRoute
