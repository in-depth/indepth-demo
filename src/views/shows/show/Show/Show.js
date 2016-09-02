import React from 'react'

const Show = (props) => {
  return (
    <div>
      <h1>{props.shows[props.id].title}</h1>
      <i>{props.shows[props.id].date}</i>
      <p>{props.shows[props.id].description}</p>
    </div>
  )
}

export default Show
