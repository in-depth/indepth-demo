import React from 'react'

import { ShowDetails } from './index'

const ShowRoute = ({ params }) => {
  return (
    <div>
      <ShowDetails show={params} />
    </div>
  )
}

export default ShowRoute
