import React from 'react'
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native'
import { withNavigation, SafeAreaView } from 'react-navigation';
import gStyles from '../../lib/globalStyles'
import ItemImage from '../../components/ItemImage'
import ItemForm from '../../components/ItemForm'

const win = Dimensions.get("window")

class ItemModal extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: (
        <View style={{display: 'flex', width: '100%', alignContent: 'center', justifyContent:'center', }}>
          <Text> Hello </Text>
        </View>
      ),
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'red',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
      },
      headerMode: "screen"
    };
  };
  render() {
    const { item } = this.props.navigation.state.params
    return (
      <View style={gStyles.container}>
        <View style={gStyles.content}>
          <View style={{height: win.width, width: win.width}}>
            <ItemImage item={item} />
          </View>
        <View style={{padding: 15, display: 'flex', alignItems: 'center'}}>
          <View>
            <Text>
              {item.title}
            </Text>
          </View>
          <View style={{padding: 15}}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>
              {item.price} РУБ
            </Text>
          </View>
          <View style={{width: win.width/2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ItemForm itemId={item.id} />
          </View>
        </View>
        </View>
      </View>
    );
  }
}

ItemModal.defaultProps = {
  item: {image:{exist: false}}
}

export default withNavigation(ItemModal)