import React from 'react'

import { ShowContainer } from './index'

const ShowRoute = (props) => {
  console.log(props.show)
  return (
    <div>
      <ShowContainer id={props.params.show} />
    </div>
  )
}

ShowRoute.propTypes = {
  params: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
}

export default ShowRoute
