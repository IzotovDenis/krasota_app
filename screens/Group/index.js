import React from 'react';
import { StyleSheet, Text, View, Button, Animated, Easing, TouchableNativeFeedback } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as catalogActions from '../../actions/catalogActions'
import Items from '../../components/Items'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

class GroupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state} = navigation;
    return {
      title: `${state.params.title}`,
      headerTitleStyle: {
              fontWeight: '400',
            },
      headerRight: (
        <TouchableNativeFeedback onPress={() => navigation.navigate('Cart')}>
          <View style={{alignItems: 'center', width: 60, paddingRight: 10, height: "100%", justifyContent: 'center'}}>
            <Icon name="bag" size={20} color="#222" />
          </View>
        </TouchableNativeFeedback>
      ),
      headerStyle: { backgroundColor: 'white', borderWidth: 0, borderBottomColor: 'white', elevation: 0, shadowOpacity: 0 },
    };
  };

  componentWillMount () {
    this.props.catalogActions.actionGetItems(this.props.navigation.state.params.groupId)
  }
  componentWillUnmount () {
    this.props.catalogActions.actionClearItems()
  }
  render() {
        const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#fff" }}>
        <Items items={this.props.group.items} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    group: state.group
  }
}

function mapDispatchToProps(dispatch) {
  return {
    catalogActions: bindActionCreators(catalogActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withNavigation(GroupScreen))