import React from 'react'
import { connect } from 'react-redux'

import { EventsList } from '../index'

const Events = (props) => {
  return (
    <div>
      <EventsList events={props.events} />
    </div>
  )
}

Events.propTypes = {
  events: React.PropTypes.array.isRequired,
}

const mapStateToProps = ({ events }) => ({
  events,
})

const EventsContainer = connect(mapStateToProps)(Events)

export default EventsContainer
export { Events }
