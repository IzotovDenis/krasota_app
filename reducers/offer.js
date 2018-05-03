import { SET_ACTIVE, SET_OFFER_ITEMS, CLEAR_OFFER_ITEMS } from '../constants/Offer'

const initialState = {
  active: {},
  items: [],
  list: [
    {
        id: 1,
        title: 'Возьми быка за рога',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    },
    {
        id: 2,
        title: 'Платишь за ТРИ получаешь ДВА!!!',
        subtitle: 'Товары участвующие в акции',
    },
    {
        id: 3,
        title: 'Платишь за ТРИ получаешь ДВА!!!',
        subtitle: 'Товары участвующие в акции',
    },
    {
        id: 4,
        title: 'Это супер лак по супер низкой лестнице',
        subtitle: 'Поднимись по лестнице десять раз и накладные ногти в подарок!!! ',
    },
]
}

export default function offer (state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE:
      return {...state, active: state.list[action.index]}
    case SET_OFFER_ITEMS:
      return {...state, items: action.items}
    case CLEAR_OFFER_ITEMS:
      return {...state, items: []}
    default:
      return { ...state }
  }
}
