const eventsState = [
  {
    title: 'Mona Lisa Opening',
    date: '01/07/2016',
    description: 'Finally recovered after stolen by Nazi Soldiers, we are opening the public to see the Mona Lisa.',
  },
  {
    title: 'Kid Tressure Hunt',
    date: '01/07/2017',
    description: 'We have hidden 25 kids around the museum, find them before they run out of air!',
  },
  {
    title: 'Wrecke\'m!',
    date: '01/07/2018',
    description: 'We give the public a sledge hammer and 20 minutes, destroy as many collections as you can!',
  },
]

const EventsReducer = (state = eventsState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default EventsReducer
