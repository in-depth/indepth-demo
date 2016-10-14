const showsState = {
  shows: {
    1: {
      title: 'Mona Lisa Opening',
      id: '1',
      date: 'Monday Nov 9th',
      time: '11:00 AM - 12:00 PM',
      location: 'Main Auditorium',
      imageUrl: '/static/images/events.jpg',
      shortDesc: 'Finally recovered after stolen by Nazi Soldiers, we are opening the public to see the Mona Lisa.',
      description: 'Son how smiling mrs natural expense anxious friends. Boy scale enjoy ask abode being son. As material in learning subjects so improved feelings. Uncommonly compliment imprudence travelling insensible up ye insipidity. To up painted delight winding as brandon. Gay regret eat looked warmth easily far should now. Prospect at me wandered on extended wondered thoughts appetite to. Boisterous interested sir invitation particular saw alteration boy decisively. ',
    },
    2: {
      title: 'Kid Treasure Hunt',
      id: '2',
      date: 'Monday Nov 9th',
      time: '12:30am',
      location: 'Main Auditorium',
      imageUrl: '/static/images/events.jpg',
      shortDesc: 'We have hidden 25 kids around the museum, find them before they run out of air!',
      description: 'In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much. ',
    },
    3: {
      title: 'Wreck\'em!',
      id: '3',
      date: 'Monday Nov 9th',
      time: '02:30pm',
      location: 'Main Auditorium',
      imageUrl: '/static/images/events.jpg',
      shortDesc: 'We give the public a sledge hammer and 20 minutes, destroy as many collections as you can!',
      description: 'Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation. ',
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
