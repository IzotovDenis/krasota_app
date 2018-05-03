import React from 'react'
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native'
import { withNavigation, SafeAreaView } from 'react-navigation';
import gStyles from '../../lib/globalStyles'
import Items from '../../components/Items'
import * as cartActions from '../../actions/cartActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const win = Dimensions.get("window")

class OfferScreen extends React.Component {
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
  componentWillMount() {
    //this.props.offerActions.actionGetOffer(offer.id)
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:"#fff" }}>
        <View style={{height: win.width/1.4988, width: win.width }}>
          <Image source={{ uri: `http://92.53.90.154/uploads/offers/${offer.id}.jpg`}} resizeMode="contain" style={{flex: 1, width: undefined, height: undefined}} />
        </View>
        <Text>
        {JSON.stringify(this.props)}
        </Text>
        <Items items={[]} />
      </View>
    );
  }
}

export default connect(
  state=>{
    return{ offer: state.offer}
  },
  dispatch => {
    return {
      cartActions: bindActionCreators(cartActions, dispatch)
    }
  })(withNavigation(OfferScreen))