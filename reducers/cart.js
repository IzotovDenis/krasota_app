import { TOUGLE_ITEM, DELETE_ITEM, SET_CART_ITEMS } from '../constants/Cart'

const initialState = {
  items: [],
  orderList: {6:3}
}

export default function catalog (state = initialState, action) {
  switch (action.type) {
    case TOUGLE_ITEM:
      let currentCount = state.orderList[action.itemId] || 0
      let newCount = currentCount + action.count
      if ( newCount >= 0 ) {
        return { ...state, orderList: {...state.orderList, [action.itemId]: newCount}}
      }
    case DELETE_ITEM:
      return { ...state, orderList: {...state.orderList, [action.itemId]: undefined}}
    case SET_CART_ITEMS:
      return { ...state, items: action.items}
    default:
      return { ...state }
  }
}
