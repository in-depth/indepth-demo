import React from 'react'

import { PlanContainer } from './index'

const PlanRoute = (props) => {
  return (
    <div>
      <PlanContainer path={props.location.pathname} />
    </div>
  )
}

PlanRoute.propTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired,
  }).isRequired,
}


export default PlanRoute
