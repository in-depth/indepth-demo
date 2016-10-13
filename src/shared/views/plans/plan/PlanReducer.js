import { TOGGLE_CHECKED_AGES, ADD_TIME, TOGGLE_CHECKED_INTERESTS } from './PlanActions'

const planState = {
  preferences: {
    ages: [
      {
        title: 'Under 10',
        checked: false,
      },
      {
        title: '10 to 13',
        checked: false,
      },
      {
        title: '14 to 17',
        checked: false,
      },
      {
        title: 'Adults',
        checked: false,
      },
    ],
    time: 1,
    interests: [
      {
        title: 'Science',
        checked: false,
      },
      {
        title: 'History',
        checked: false,
      },
      {
        title: 'Art',
        checked: false,
      },
      {
        title: 'Culture',
        checked: false,
      },
      {
        title: 'Technology',
        checked: false,
      },
    ],
  },
  planType: '',
}

export const PlanReducer = (state = planState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKED_AGES:
      return Object.assign({}, state, {
        preferences: preferencesReducer(state.preferences, action),
      })
    case TOGGLE_CHECKED_INTERESTS:
      return Object.assign({}, state, {
        preferences: preferencesReducer(state.preferences, action),
      })
    case ADD_TIME:
      return Object.assign({}, state, {
        preferences: preferencesReducer(state.preferences, action),
      })
    default:
      return state
  }
}

const preferencesReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CHECKED_AGES:
      return Object.assign({}, state, {
        ages: state.ages.map((age, index) => {
          if (index === action.index) {
            return Object.assign({}, age, {
              checked: !age.checked,
            })
          }
          return age
        }),
      })

    case ADD_TIME:
      return Object.assign({}, state, {
        time: action.time,
      })

    case TOGGLE_CHECKED_INTERESTS:
      return Object.assign({}, state, {
        interests: state.interests.map((interest, index) => {
          if (index === action.index) {
            return Object.assign({}, interest, {
              checked: !interest.checked,
            })
          }
          return interest
        }),
      })

    default:
      return state
  }
}
