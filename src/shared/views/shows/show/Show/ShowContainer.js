import { connect } from 'react-redux'

import Show from './Show'

const mapStateToProps = (state, ownProps) => {
  const show = state.shows.shows[ownProps.id]
  return {
    title: show.title,
    date: show.date,
    description: show.description,
    location: show.location,
    time: show.time,
    cost: show.cost,
    imageUrl: show.imageUrl,
  }
}

const ShowContainer = connect(mapStateToProps)(Show)

export default ShowContainer
