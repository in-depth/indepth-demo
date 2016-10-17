import React from 'react'
import { ShowHeader, ShowDetails } from '../index'

const Show = (props) => {
  return (
    <div>
      <ShowHeader title={props.title} imageUrl={props.imageUrl} />
      <ShowDetails
        date={props.date}
        description={props.description}
        time={props.time}
        location={props.location}
        cost={props.cost}
      />
    </div>
  )
}

Show.propTypes = {
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  time: React.PropTypes.string.isRequired,
  cost: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired,
}
export default Show
