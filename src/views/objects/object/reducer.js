const objectState = {
  title: 'Rowan\'s Mohawk',
  mainImage: {
    url: 'https://avatars3.githubusercontent.com/u/9244507?s=250',
    title: 'Rowan with his mohawk in the 70s',
  },
  date: '1945',
}

const objectReducer = (state = objectState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default objectReducer
