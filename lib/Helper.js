import { Dimensions } from 'react-native'

const win = Dimensions.get("window")

export const getFontSize = (size) => {
  return win.width/(400/size)
}