const showsState = {
  shows: {
    1: {
      title: 'Mona Lisa Opening',
      id: '1',
      date: '01/07/2016',
      description: 'Finally recovered after stolen by Nazi Soldiers, we are opening the public to see the Mona Lisa.',
    },
    2: {
      title: 'Kid Tressure Hunt',
      id: '2',
      date: '01/07/2017',
      description: 'We have hidden 25 kids around the museum, find them before they run out of air!',
    },
    3: {
      title: 'Wrecke\'m!',
      id: '3',
      date: '01/07/2018',
      description: 'We give the public a sledge hammer and 20 minutes, destroy as many collections as you can!',
    },
  },
  defaultOrder: ['1', '2', '3'],
}

export const ShowsReducer = (state = showsState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
