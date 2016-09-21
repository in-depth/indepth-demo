import { connect } from 'react-redux'

import Show from './Show'

const mapStateToProps = (state, ownProps) => {
  const show = state.shows.shows[ownProps.id]
  return {
    title: show.title,
    date: show.date,
    description: show.description,
  }
}

const ShowContainer = connect(mapStateToProps)(Show)

export default ShowContainer
