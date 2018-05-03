import { StyleSheet } from 'react-native'

const styles =  {}

styles.container = {
  display: 'flex',
  flexDirection: 'row'
}

styles.imageView = {
  width: 90,
  height: 90,
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingRight: 15
}

styles.orderView = {
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: "center"
}

styles.priceView = {
  flex: 1
}

styles.countFormView = {
  flex: 1
}

styles.deleteView = {
  width: 20
}

styles.titleView = {
  flex: 1.5
}

styles.itemView = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
}

export default StyleSheet.create(styles)