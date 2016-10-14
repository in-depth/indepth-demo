import React from 'react'
import { Link } from 'react-router'

import { List, ListItem } from 'react-toolbox/lib/list'

const ShowsList = (props) => {
  return (
    <div>
      <h1><b>Events</b></h1>
      <List selectable ripple>
        {props.order.map((showId) => (
          <div key={showId}>
            <i style={{ padding: '0 20px' }}>{props.shows[showId].date}</i>
            <Link to={`/events/${showId}`}>
              <ListItem
                avatar={props.shows[showId].imageUrl}
                caption={props.shows[showId].title}
                legend={`${props.shows[showId].shortDesc.substr(0, 80)}...`}
              />
            </Link>
          </div>
        ))}
      </List>
    </div>
  )
}

ShowsList.propTypes = {
  shows: React.PropTypes.object.isRequired,
  order: React.PropTypes.array.isRequired,
}

export default ShowsList
