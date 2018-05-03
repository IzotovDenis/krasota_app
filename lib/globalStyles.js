import { Dimensions, StyleSheet } from 'react-native'

const win = Dimensions.get("window")

const gStyles = {}

gStyles.container = {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

gStyles.content = {
    flex:1,
    width: win.width,
    display: 'flex',
    alignItems: 'center'
  }

gStyles.footer = {
    backgroundColor: "white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: win.width
  }

gStyles.footer2 = {
    ...gStyles.footer,
    height: gStyles.footer.height*2
  }

export default StyleSheet.create(gStyles)