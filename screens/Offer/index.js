import React from 'react'

import { View, Text, FlatList, StyleSheet, Dimensions, Image, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import gStyles from '../../lib/globalStyles'
import Items from '../../components/Items'
import * as offerActions from '../../actions/offerActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const win = Dimensions.get("window")

class OfferScreen extends React.Component {
  componentDidMount() {
    this.props.offerActions.actionGetOffer()
  }
  componentWillUnmount() {
    this.props.offerActions.clearItems()
  }
  render() {
    const { offer } = this.props.navigation.state.params
  return (
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={{height: win.width/1.4988, width: win.width }}>
          <Image source={{ uri: `http://92.53.90.154/uploads/offers/${offer.id}.jpg`}} resizeMode="contain" style={{flex: 1, width: undefined, height: undefined}} />
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            {offer.title}
          </Text>
        </View>
        <View style={{padding: 10, paddingTop: 0}}>
          <Text style={{fontSize: 15, fontWeight: '400'}}>
            {offer.subtitle}
          </Text>
        </View>
        <Items items={this.props.offer.items} />
      </ScrollView>
      );
  }
}

export default connect(
  state=>{
    return{ offer: state.offer}
  },
  dispatch => {
    return {
      offerActions: bindActionCreators(offerActions, dispatch)
    }
  })(OfferScreen)