import React from 'react'
import { ShowHeader, ShowDetails } from '../index'

const Show = (props) => {
  return (
    <div>
      <ShowHeader title={props.title} />
      <ShowDetails
        date={props.date}
        description={props.description}
      />
    </div>
  )
}

Show.propTypes = {
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
}
export default Show
