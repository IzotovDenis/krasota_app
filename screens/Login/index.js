import React from 'react';
import { StyleSheet, View, ScrollView, Image, Dimensions, StatusBar, Text } from 'react-native';
import { TabNavigator, withNavigation, NavigationActions } from 'react-navigation';
import SignIn from '../../components/LoginScreens/SignIn';
import Registration from '../../components/LoginScreens/Registration';

const BG_IMAGE = require('../../assets/images/img.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b3849',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabbar: {
    backgroundColor: '#fff',
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: "#ffffff10",
    borderRadius: 15,
    borderBottomColor: 'rgba(0, 0, 0, 0.16)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tablabel: {
    color: '#eee',
    fontSize: 12,
    marginVertical: 8,
  },
  indicator: {
    backgroundColor: '#222',
  },
});

class Ren extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate("Registration");
  }
  render() {
    return (
      <View><Text> Resds</Text></View>
    )
  }
}

const InfoTabs = TabNavigator(
  {
    SignIn: {
      screen: ({ screenProps, ...rest }) => (
        <SignIn {...rest} />
      ),
      navigationOptions: {
        tabBarLabel:"Вход",
      }
    },
    Registration: {
      screen: ({ screenProps, ...rest }) => (
        <Registration {...rest} />
      ),
      navigationOptions: {
        tabBarLabel:"Регистрация",
      }
    },
  },
  {
    tabBarOptions: {
      style: styles.tabbar,
      indicatorStyle: styles.indicator,
      labelStyle: styles.tablabel,
      activeTintColor: '#fff',
      activeBackgroundColor: 'red',
      inactiveTintColor: '#222',
    },
    backBehavior: 'none',
    order: ['SignIn', 'Registration'],
  }
);

class LoginScreen extends React.Component {
  componentDidMount() {
    const navigateAction = NavigationActions.navigate({
      routeName: "Registration"
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{height:200, width: SCREEN_WIDTH, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={BG_IMAGE}  style={{height:102, width: 150,}} />
        </View>
        <View style={{height:400, width: SCREEN_WIDTH*0.9, backgroundColor: "transparent", borderRadius: 15}}>
        <InfoTabs/>
        </View>
      </View>
    );
  }
}



export default withNavigation(LoginScreen)