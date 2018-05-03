import { TOUGLE_CATALOG_ITEM, SET_CATALOG, SET_GROUP_ITEMS, CLEAR_ITEMS } from '../constants/Catalog'

//const HOST = "http://192.168.0.107:3000"
const HOST = "http://92.53.90.154"

export function tougleCatalogItem(itemId) {
  return {
    type: TOUGLE_CATALOG_ITEM,
    itemId: itemId
  }
}

function getCatalog() {
  return fetch(`${HOST}/v1/groups`).then((response) => response.json())
}

function setCatalog(catalog) {
  return {
    type: SET_CATALOG,
    catalog: catalog
  }
}

export function actionGetCatalog() {
  return function (dispatch) {
    return getCatalog().then(
      catalog => dispatch(setCatalog(catalog))
    )
  }
}

function getItems(groupId) {
  return fetch(`${HOST}/v1/groups/${groupId}`).then((response) => response.json())
}

function setItems(items) {
  return {
    type: SET_GROUP_ITEMS,
    items: items
  }
}

export function actionGetItems(groupId) {
  return function (dispatch) {
    return getItems(groupId).then(
      items => dispatch(setItems(items))
    )
  }
}

export function actionClearItems() {
  return {
    type: CLEAR_ITEMS
  }
}

