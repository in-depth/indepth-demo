export const TOGGLE_CHECKED_AGES = 'TOGGLE_CHECKED_AGES'
export const ADD_TIME = 'ADD_TIME'
export const TOGGLE_CHECKED_INTERESTS = 'TOGGLE_CHECKED_INTERESTS'

export function toggleCheckedAges(ageGroup, index) {
  return {
    type: TOGGLE_CHECKED_AGES,
    ageGroup,
    index,
  }
}

export function toggleCheckedInterests(interest, index) {
  return {
    type: TOGGLE_CHECKED_INTERESTS,
    interest,
    index,
  }
}

export function addTime(time) {
  return {
    type: ADD_TIME,
    time,
  }
}
