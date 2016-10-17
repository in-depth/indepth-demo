const showsState = {
  shows: {
    1: {
      title: 'MONA LISA OPENING',
      id: '1',
      date: 'Monday Nov 9th',
      time: '11:00 AM - 12:00 PM',
      cost: 'No cost',
      location: 'Main Auditorium',
      imageUrl: '/static/images/events.jpg',
      shortDesc: 'To up painted delight winding as brandon.',
      description: 'Son how smiling mrs natural expense anxious friends. Boy scale enjoy ask abode being son. As material in learning subjects so improved feelings. Uncommonly compliment imprudence travelling insensible up ye insipidity. To up painted delight winding as brandon. Gay regret eat looked warmth easily far should now. Prospect at me wandered on extended wondered thoughts appetite to. Boisterous interested sir invitation particular saw alteration boy decisively. ',
    },
    2: {
      title: 'KIDS TREASURE HUNT',
      id: '2',
      date: 'Monday Nov 9th',
      time: '12:30am',
      cost: 'No cost',
      location: 'Main Auditorium',
      imageUrl: '/static/images/events.jpg',
      shortDesc: 'Is handsome an declared at received in extended vicinity subjects.',
      description: 'In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much. ',
    },
    3: {
      title: 'TAI CHI DEMONSTRATION AND WORKSHOP',
      id: '3',
      date: 'Monday Nov 9th',
      time: '02:30pm',
      cost: 'No cost',
      location: 'Main Auditorium',
      imageUrl: '/static/images/events.jpg',
      shortDesc: 'Son how smiling mrs natural expense anxious friends.',
      description: 'Son how smiling mrs natural expense anxious friends. Boy scale enjoy ask abode being son. As material in learning subjects so improved feelings. Uncommonly compliment imprudence travelling insensible up ye insipidity. To up painted delight winding as brandon. Gay regret eat looked warmth easily far should now. Prospect at me wandered on extended wondered thoughts appetite to. Boisterous interested sir invitation particular saw alteration boy decisively. ',
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
