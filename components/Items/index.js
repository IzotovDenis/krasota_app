import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, Dimensions, PixelRatio, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements'
import ItemForm from '../ItemForm'
import ItemImage from '../ItemImage'

const win = Dimensions.get("window")
const WIDTH = win.width
const HEIGHT = win.height
const pixelRatio = PixelRatio.getFontScale()

class Items extends React.PureComponent {
  constructor (props) {
    super(props)
    this._renderItem = this._renderItem.bind(this)
  }
  _keyExtractor = (item, index) => item.id;
  _renderItem = ({item}) => {
    return (<View style={styles.container}>
    <TouchableWithoutFeedback onPress={(e) => this.props.navigation.navigate('Item', {item: item})} >
      <View style={{display: 'flex', flex:1, width: WIDTH/2-10, height: WIDTH/2-10}}>
        <ItemImage item={item} />
      </View>
    </TouchableWithoutFeedback>
    <View style={styles.titleContainer}>
      <Text style={styles.Item}> {item.title ? item.title.toUpperCase() : 'НЕТ НАЗВАНИЯ'} </Text>
    </View>
    <View>
    <Text style={styles.Price}> {item.price} РУБ </Text>
    </View>
      <ItemForm itemId={item.id} />
    <View>
    </View>
    </View>)
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.props.items}
          keyExtractor={this._keyExtractor}
          numColumns={2}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: win.width/2,
    flex: 1,
    padding: win.width/40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  MainContainer: {
    width: win.width
  },
  Item: {
    textAlign: 'center',
    fontSize: win.width/30/pixelRatio
  },
  Price: {
    fontSize: win.width/24
  },
  Padding: {
    paddingLeft: 10
  },
  titleContainer: {
    backgroundColor: "#fff",
    height: win.width/5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
    buttonBuy: {
    borderColor: '#2b384b',
    borderWidth: 1,
    backgroundColor: "#fff",
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50
  },
  buttonBuyLabel: {
    color: "#2b384b" 
  }
});


export default withNavigation(Items)