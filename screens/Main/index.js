import React from 'react';
import { StyleSheet, Text, View, Button, Animated, Easing, ScrollView, TouchableOpacity, TouchableNativeFeedback, Image } from 'react-native';
import { StackNavigator, SafeAreaView} from 'react-navigation';
import Catalog from '../../components/Catalog'
import { connect } from 'react-redux'
import * as catalogActions from '../../actions/catalogActions'
import { bindActionCreators } from 'redux'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import MainCarousel from '../../components/MainCarousel'
import RModal from '../../components/RModal'
import { SearchBar } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

class HeadSearch extends React.Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(e) {
    this.props.navigation.navigate('Search')
  }
  render() {
    return <TouchableOpacity onPress={(e) => this.handleInput()}>
            <View style={{backgroundColor: '#fff', height: 30, display: 'flex',flexDirection: 'row', alignItems:'center', paddingLeft: 10, borderBottomColor: "#555", borderBottomWidth: 1}}>
              <Icon name="magnifier"  size={14} color="#555" />
              <View style={{paddingLeft: 10}}>
                <Text style={{color: "#555"}}>
                  Поиск
                </Text>
              </View>
            </View>
          </TouchableOpacity>
  }
}
HeadSearch = withNavigation(HeadSearch)

class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <TouchableNativeFeedback onPress={() => navigation.navigate('Cart')}>
          <View style={{alignItems: 'center', width: 60, paddingRight: 10, height: "100%", justifyContent: 'center'}}>
            <Icon name="bag" size={20} color="#222" />
          </View>
        </TouchableNativeFeedback>
      ),
      headerTitle: (
        <View style={{display: 'flex', width: '100%', alignContent: 'center', justifyContent:'center',}}>
          <HeadSearch/>
        </View>
      ),
      headerLeft: (
        <TouchableNativeFeedback onPress={() => navigation.navigate('DrawerToggle')}>
          <View style={{alignItems: 'center', width: 60, paddingRight: 10, height: "100%", justifyContent: 'center'}}>
            <Icon name="menu" size={20} color="#222" />
          </View>
        </TouchableNativeFeedback>  
      ),
      headerStyle: { backgroundColor: 'white', borderWidth: 0, borderBottomColor: 'white', elevation: 0, shadowOpacity: 0 },
    };
  };
  constructor(props) {
    super(props);
  }

    componentDidMount() {
    this.props.catalogActions.actionGetCatalog()
  }
  render() {
    return (
        <ScrollView style={{backgroundColor: "#fff"}}>
          <MainCarousel />
        <Catalog/>
        </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog
  }
}

function mapDispatchToProps(dispatch) {
  return {
    catalogActions: bindActionCreators(catalogActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withNavigation(MainScreen))
