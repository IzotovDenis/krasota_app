import {SET_GROUP_ITEMS, CLEAR_ITEMS} from '../constants/Catalog'

const initialState = {
  fetching: false,
  title: "Самые лучшие средства",
  items: []
}

export default function group (state = initialState, action) {
  switch (action.type) {
    case SET_GROUP_ITEMS:
      return {...state, items: action.items.items}
    case CLEAR_ITEMS:
      return {...state, items: []}
    default:
      return state
  }
}

